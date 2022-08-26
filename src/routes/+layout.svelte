<script lang="ts">
	//  Load Global CSS
	import '$root/styles/app.css';
	import '$root/styles/reset.css';
	import '$root/styles/vars.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		margin-top: var(--bar-height);
	}
</style>
