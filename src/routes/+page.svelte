<script lant="ts">
	import Bar from '$root/lib/navigations/Bar.svelte';
	import Side from '$root/lib/navigations/Side.svelte';
	import Footer from '$root/lib/navigations/Footer.svelte';

	import { createTitle } from '$root/utils/title-generator';
	const title = createTitle(`Hello World!`);
	let names = ['Name 1', 'Name 2', 'Name 3'];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Bar />
<Side />
{#each names as name, index}
	<li>{index} - {name}</li>
{/each}
<Footer />
