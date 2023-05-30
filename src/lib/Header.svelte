<script>
	import { Avatar, Link, Menu, NotificationIcon, Header } from 'quironlibrary';

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

		<li><a href="/notifications"><NotificationIcon /></a></li>
		<li><a href="/profile"><Avatar small /></a></li>
	</Menu>
</Header>
