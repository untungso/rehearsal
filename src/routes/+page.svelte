<script lant="ts">
	import { createTitle } from '$root/utils/title-generator';
	const title = createTitle(`Hello World!`);
	let names = ['Name 1', 'Name 2', 'Name 3'];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#each names as name, index}
	<li>{index} - {name}</li>
{/each}
