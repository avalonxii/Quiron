<script lang="ts">
	import { enhance } from '$app/forms';
	import Footer from '$lib/fragments/Footer.svelte';
	import Header from '$lib/fragments/Header.svelte';
</script>

<Header />

<div class="content">
	<slot />
</div>

<form action="?/sendOpinion" method="POST" use:enhance>
	<Footer />
</form>

<style lang="scss">
	@use '../../scss/colors';

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
</style>
