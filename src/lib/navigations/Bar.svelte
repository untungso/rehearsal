<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$root/design/Button.svelte';
	import Logo from '$root/design/Logo.svelte';
</script>

<header>
	<div class="left-nav">
		<a class="logo-wrapper" href="/">
			<Logo />
		</a>
	</div>
	<nav class="right-nav">
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a data-sveltekit-prefetch href="/">Learn</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a data-sveltekit-prefetch href="/">Camps</a>
			</li>
			<li class:active={$page.url.pathname === '/about-us'}>
				<a data-sveltekit-prefetch href="/about-us">About Us</a>
			</li>
			<li>
				<Button>Connect</Button>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100vw;
		height: var(--bar-height);
		border-bottom: 2px solid var(--slate6);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--slate1);
	}
	.left-nav {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: var(--space-medium);
		padding-right: var(--space-medium);
		border-right: 2px solid var(--slate6);
	}
	.right-nav ul {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: var(--space-medium);
	}
	.right-nav li {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		list-style-type: none;
		padding-left: var(--space-small);
		margin-left: var(--space-small);
		border-left: 2px solid var(--slate6);
		font-size: var(--font-display);
		font-weight: var(--font-bold);
	}
	.logo-wrapper {
		height: 48px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
