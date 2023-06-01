<script lang="ts">
	import { enhance } from '$app/forms';
	import Footer from '$lib/fragments/Footer.svelte';
	import Header from '$lib/fragments/Header.svelte';

	/* import type { LayoutData } from './$types';
	  
	export let data: LayoutData; */
</script>

<Header />

<div class="content">
	<slot />
</div>

<form action="?/sendOpinion" method="POST" use:enhance>
	<Footer />
</form>

<style lang="scss">
	@use '../scss/reset';
	@use '../scss/typography';
	@use '../scss/colors';

	:global(.content) {
		min-height: 100vh;
		padding-top: 4.0625rem;
	}

	:global(.icon) {
		color: map-get($map: colors.$colors, $key: 'black');
		font-size: 2rem;
		padding: 0.3rem;
		cursor: pointer;

		&:hover {
			transform: scale(1.1);
		}
	}

	:global(body, button) {
		font-family: 'JetBrains Mono', monospace;
	}

	/* :global(button) {
		text-transform: uppercase;
	} */

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Poppins', sans-serif;
	}
</style>
