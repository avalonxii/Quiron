<script lang="ts">
	import { Button, ContainerCentred, Input, InputPhoto, Minititle, Title } from 'quironlibrary';
	import type { ActionData, PageData } from './$types';
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="bc content">
	<ContainerCentred>
		<form
			action="?/register"
			method="post"
			enctype="multipart/form-data"
			class="register__container"
			use:enhance
		>
			<div class="title"><Title>Register</Title></div>
			<div class="register__inputs">
				<Input
					label="What's ur name?"
					type="text"
					value={form?.name.name || 'juanPortilla'}
					name="name"
					required
					error={form?.name.error != '' && form?.name.error ? true : false}
				>
					{form?.name.error}</Input
				>
				<Input
					label="What's ur userName?"
					type="text"
					value={form?.userName.userName || 'AvalonXII'}
					name="userName"
					required
					error={form?.userName.error != '' && form?.userName.error ? true : false}
					>{form?.userName.error}</Input
				>
				<Input
					label="What's ur email?"
					type="email"
					value={form?.email.email || 'avalon@gmail.com'}
					name="email"
					required
					error={form?.email.error != '' && form?.email.error ? true : false}
					>{form?.email.error}</Input
				>
				<Input
					label="What's ur password?"
					type="password"
					value={form?.passw.passw || 'Avalon12'}
					name="password"
					required
					error={form?.passw.error != '' && form?.passw.error ? true : false}
					>{form?.passw.error}</Input
				>
				<Input
					label="repeat ur password"
					type="password"
					name="password2"
					required
					error={form?.passw2.error != '' && form?.passw2.error ? true : false}
					>{form?.passw2.error}</Input
				>
			</div>

			<div class="register__other">
				<InputPhoto name="image" />
				<Button label="register" />
			</div>
		</form>

		<div class="go-login">
			<div class="title"><Minititle>You already have an account ?</Minititle></div>
			<div />
			<Button label="Navigate to Login" on:click={() => goto('/login')} secondary />
		</div>
	</ContainerCentred>
</div>

<style lang="scss">
	@use '../../scss/colors';

	.register {
		&__container {
			position: relative;
			border: 0.1875rem solid map-get($map: colors.$colors, $key: 'gray');
			border-radius: 1rem;
			padding: 1.3rem;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;

			.title {
				position: absolute;
				right: 40px;
				top: -35px;
				padding: 0 0.5rem;
				background-color: map-get($map: colors.$colors, $key: 'bc-white');
			}
		}

		&__inputs {
			border-right: 2px solid map-get($map: colors.$colors, $key: 'gray');
			padding-right: 1rem;
		}

		&__other {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 3rem 0;
		}
	}

	.go-login {
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
