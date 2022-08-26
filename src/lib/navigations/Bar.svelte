<script lang="ts">
	import { page } from '$app/stores';
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
				<a sveltekit:prefetch href="/">Learn</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Camps</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About Us</a>
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
		list-style-type: none;
		margin-left: var(--space-small);
	}
	.logo-wrapper {
		height: 48px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
