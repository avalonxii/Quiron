<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	/* import type { LayoutData } from './$types';
    
    export let data: LayoutData; */
</script>

<Header />

<div class="content">
	<slot />
</div>

<Footer />

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

	:global(body) {
		font-family: 'JetBrains Mono', monospace;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Poppins', sans-serif;
	}
</style>
