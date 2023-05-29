<script>
	import { Button, Input, TextArea } from 'quironlibrary';

	let usuario = '';
</script>

<div class="contact">
	<TextArea error={false} />
	{#if usuario}
		<Button label="Send" />
	{:else}
		<Button label="Log in" />
	{/if}
</div>
