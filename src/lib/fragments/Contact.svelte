<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button, Input, TextArea } from 'quironlibrary';

	let usuario = '';
</script>

<div class="contact">
	<TextArea name="opinion" error={false} />
	{#if $page.data.userAuth}
		<Button label="Send" type="submit" />
	{:else}
		<Button label="Log in" type="button" on:click={() => goto('/login')} />
	{/if}
</div>
