<script lant="ts">
	import { createTitle } from '$root/utils/title-generator';
	const title = createTitle(`Hello World!`);
	let names = [100, 200, 300, 400, 500, 600, 700, 800, 900];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#each names as name, index}
	<li style="font-weight: {name}">{index} - {name}</li>
{/each}
