<script>
	import FooterLogo from '$root/design/FooterLogo.svelte';

	const socialMedia = [{ url: `/instagram` }];
</script>

<footer>
	<div class="footer-logo">
		<FooterLogo />
		<div>
			<h1>Malah</h1>
			<h1>Ngoding</h1>
		</div>
	</div>
</footer>
<div class="footer-social-media">
	<div class="social-media-button">Instagram</div>
	<div class="social-media-button">Youtube</div>
	<div class="social-media-button">Discord</div>
</div>

<style>
	footer {
		width: calc(100vw - var(--side-width));
		border-top: var(--border-sm) solid var(--slate6);
		border-bottom: var(--border-sm) solid var(--slate6);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--slate1);
		padding: var(--space-medium);
	}
	.footer-logo {
		display: flex;
		flex-direction: row;
	}
	.footer-social-media {
		width: calc(100vw - var(--side-width));
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.social-media-button {
		height: 32px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.social-media-button button {
		background: transparent;
		border: none;
		color: var(--slate1);
	}
	.social-media-button button:hover {
		cursor: pointer;
	}
</style>
