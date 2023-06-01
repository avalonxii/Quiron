<script>
	import { goto } from '$app/navigation';
	import { Button, Input, TextArea } from 'quironlibrary';

	let usuario = '';
</script>

<div class="contact">
	<TextArea name="opinion" error={false} />
	{#if usuario}
		<Button label="Send" type="submit" />
	{:else}
		<Button label="Log in" type="button" on:click={() => goto('/login')} />
	{/if}
</div>
