<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$root/design/Logo.svelte';
</script>

<nav>
	<div class="left">
		<Logo />
	</div>
	<div class="right">
		<ul>
			<li class:active={$page.url.pathname === '/learn'}>
				<a class="nav-link" data-sveltekit-prefetch href="/learn">Learn</a>
			</li>
			<li class:active={$page.url.pathname === '/camps'}>
				<a class="nav-link" data-sveltekit-prefetch href="/camps">Camps</a>
			</li>
			<li class:active={$page.url.pathname === '/about-us'}>
				<a class="nav-link" data-sveltekit-prefetch href="/about-us">About Us</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.active {
		outline: var(--border-sm) solid var(--slate12);
	}
</style>
