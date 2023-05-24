<script lang="ts">
	/* import type { LayoutData } from './$types';
    
    export let data: LayoutData; */

	import { Header } from 'quironlibrary';
	import { Footer } from 'quironlibrary';
</script>

<Header />
<div>
	<slot />
</div>
<Footer />

<style lang="scss">
	@use '../scss/reset';
	@use '../scss/typography';

	div {
		min-height: 100vh;
		padding-top: 4.0625rem;
	}

	:global(body) {
		font-family: 'JetBrains Mono', monospace;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Poppins', sans-serif;
	}

	:global(.small) {
		font-size: map-get($map: typography.$font-size, $key: 'small');
	}

	:global(.mini-title) {
		font-weight: bold;
		margin-bottom: 1rem;
	}

	:global(.paragraph) {
		font-size: map-get($map: typography.$font-size, $key: 'paragraph');
	}

	:global(.medium) {
		font-size: map-get($map: typography.$font-size, $key: 'medium');
	}

	:global(.subtitle) {
		// h3
		font-size: map-get($map: typography.$font-size, $key: 'subtitle');
	}

	:global(.title) {
		// h2
		font-size: map-get($map: typography.$font-size, $key: 'title');
	}

	:global(.big) {
		font-size: map-get($map: typography.$font-size, $key: 'big');
	}
</style>
