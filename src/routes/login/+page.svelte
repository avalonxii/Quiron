<script lang="ts">
	import { Button, ContainerCentred, Input, Title } from 'quironlibrary';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import About from '$lib/About.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="bc content">
	<ContainerCentred>
		<form action="?/login" method="POST" class="login__container" use:enhance>
			<div class="title"><Title>Log In</Title></div>
			<Input
				label="Enter your email"
				type="email"
				value={form?.email}
				name="email"
				required
				error={form?.error ? true : false}
			>
				{form?.error}
			</Input>
			<Input label="Enter your password" type="password" name="password" required />
			<Button label="Enviar">enviar</Button>
		</form>
	</ContainerCentred>
</div>

<style lang="scss">
	@use '../../scss/colors';

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
				top: -30px;
				left: 30px;
				display: flex;
				background-color: map-get($map: colors.$colors, $key: 'bc-white');
			}
		}
	}
</style>
