<script lang="ts">
</script>

<button>
	<slot />
</button>

<style>
	button {
		padding: 8px 16px;
		background-color: var(--cyan8);
		border: 2px solid var(--slate12);
		color: var(--slate12);
		font-size: var(--font-display);
		font-weight: var(--font-bold);
	}
	button:hover {
		cursor: pointer;
		box-shadow: 5px 5px;
		animation: bounce 0.2s;
	}
	@keyframes bounce {
		from {
			box-shadow: 0px 0px;
		}
		to {
			box-shadow: 5px 5px;
		}
	}
</style>
