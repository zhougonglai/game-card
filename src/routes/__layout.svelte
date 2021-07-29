<script>
import { page, navigating } from '$app/stores';
import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
import '../app.css';
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<main>
	<slot />
</main>
