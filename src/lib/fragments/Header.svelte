<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from '$lib/fragments/Logo.svelte';
	import { Avatar, Link, Menu, NotificationIcon, Header, Button } from 'quironlibrary';

	let links = [
		{ label: 'Home', href: '/' },
		{ label: 'Challenges', href: 'challenges' },
		{ label: 'Solutions', href: 'solutions' }
	];
</script>

<Header>
	<div class="logo"><Logo /></div>
	<Menu>
		{#each links as { label, href }}
			<li><Link {label} {href} /></li>
		{/each}

		{#if $page.data.userAuth?.role === 'ADMIN'}
			<li><Link label="Users" href="/users" /></li>
		{/if}

		{#if !$page.data.userAuth}
			<li><Button label="Get started" on:click={() => goto('/login')} /></li>
		{:else}
			<li><a href="/notifications"><NotificationIcon /></a></li>

			<li><a href="/profile"><Avatar small /></a></li>

			<form action="?/logOut" method="post">
				<button class="log-out">Log Out</button>
			</form>
		{/if}
	</Menu>
</Header>

<style lang="scss">
	@use '../../scss/colors';

	.log-out {
		border: 3px solid map-get($map: colors.$colors, $key: 'error');
		background-color: map-get($map: colors.$colors, $key: 'error');
		border-radius: 0.4rem;
		padding: 0.5rem;
		font-weight: bold;
		color: map-get($map: colors.$colors, $key: 'white');
		cursor: pointer;
		user-select: none;

		&:hover {
			background-color: transparent;
			color: map-get($map: colors.$colors, $key: 'error');
		}

		&:active {
			transform: scale(0.9);
			transition: 0.2s;
		}
	}
</style>
