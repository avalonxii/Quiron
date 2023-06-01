<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Avatar, Link, Menu, NotificationIcon, Header, Button } from 'quironlibrary';

	let links = [
		{ label: 'Home', href: '/' },
		{ label: 'Challenges', href: 'challenges' },
		{ label: 'Solutions', href: 'solutions' }
	];
</script>

<Header>
	<div class="logo">Quiron</div>
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
		{/if}
	</Menu>
</Header>
