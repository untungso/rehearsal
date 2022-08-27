<script lang="ts">
	import Bar from '$root/lib/navigations/Bar.svelte';
	import Side from '$root/lib/navigations/Side.svelte';
	import Footer from '$root/lib/navigations/Footer.svelte';
	//  Load Global CSS
	import '$root/styles/app.css';
	import '$root/styles/reset.css';
	import '$root/styles/vars.css';
</script>

<svelte:head>
	<meta name="description" content="About this app" />
</svelte:head>
<Bar />
<Side />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		margin-top: var(--bar-height);
		padding-top: var(--space-medium);
		padding-bottom: var(--space-medium);
	}
</style>
