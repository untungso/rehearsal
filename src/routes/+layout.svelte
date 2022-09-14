<script lang="ts">
	import Bar from '$root/lib/navigations/Bar.svelte';
	import Side from '$root/lib/navigations/Side.svelte';
	import Footer from '$root/lib/navigations/Footer.svelte';
	//  Load Global CSS
	import '$root/styles/app.css';
	import '$root/styles/fonts.css';
	import '$root/styles/reset.css';
	import '$root/styles/vars.css';
</script>

<svelte:head>
	<meta name="description" content="About this app" />
</svelte:head>
<Bar />
<Side />
<main class="svelte">
	<slot />
</main>
<Footer />

<style>
	.svelte {
		min-height: 100vh;
		margin-top: var(--bar-height);
		padding: var(--space-medium);
		width: calc(100vw - (var(--side-width) + var(--border-sm)));
	}
</style>
