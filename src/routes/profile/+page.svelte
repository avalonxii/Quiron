<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form action="?/logOut" method="POST">
	<input type="submit" value="out" />
</form>
