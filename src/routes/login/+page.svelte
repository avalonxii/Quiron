<script lang="ts">
	import { Button, ContainerCentred, Input, Minititle, Title } from 'quironlibrary';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	/* export let data: PageData; */
	export let form: ActionData;
</script>

<div class="bc content">
	<ContainerCentred>
		<form action="?/login" method="POST" class="login__container" use:enhance>
			<div class="title"><Title>Log In</Title></div>
			<Input
				label="Enter your Email"
				type="email"
				value={form?.email}
				name="email"
				required
				error={form?.error ? true : false}
			>
				{form?.error}
			</Input>
			<Input label="Enter your password" type="password" name="password" required />
			<Button label="Log in" />
		</form>

		<div class="go-register">
			<div class="title"><Minititle>You don´t have an account?</Minititle></div>
			<div />
			<Button label="Navigate to Register" on:click={() => goto('/register')} secondary />
		</div>
	</ContainerCentred>
</div>

<style lang="scss">
	@use '../../scss/colors';

	.content {
		padding-top: 8.75rem;
	}

	.login {
		&__container {
			position: relative;
			border: 0.1875rem solid map-get($map: colors.$colors, $key: 'gray');
			border-radius: 1rem;
			padding: 3.3rem;
			display: grid;
			gap: 1rem;

			.title {
				position: absolute;
				top: -35px;
				left: 30px;
				display: flex;
				padding: 0 0.5rem;
				background-color: map-get($map: colors.$colors, $key: 'bc-white');
			}
		}
	}

	.go-register {
		position: relative;
		border: 0.1875rem solid map-get($map: colors.$colors, $key: 'gray');
		border-radius: 1rem;
		padding: 1.3rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 2rem;
		justify-self: end;

		.title {
			position: absolute;
			top: -12px;
			left: 30px;
			background-color: map-get($map: colors.$colors, $key: 'bc-white');
		}
	}
</style>
