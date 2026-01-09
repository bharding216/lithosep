<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';

	// Toggle this to re-enable the full site.
	// (Intentionally hard-coded for a "paused" site.)
	const MAINTENANCE_MODE = true;
</script>

<svelte:head>
	{#if MAINTENANCE_MODE}
		<title>Site Paused</title>
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>

<div>
	{#if !MAINTENANCE_MODE}
		<Header />
	{/if}

	<main>
		{#if MAINTENANCE_MODE}
			<section class="maintenance">
				<div class="maintenance-card">
					<h1 class="maintenance-title">This site is currently paused.</h1>
					<p class="maintenance-subtitle">Please check back later.</p>
				</div>
			</section>
		{:else}
			<slot />
		{/if}
	</main>

	{#if !MAINTENANCE_MODE}
		<Footer />
	{/if}
</div>

<style>
	.maintenance {
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 48px 16px;
		background: radial-gradient(1200px 600px at 50% 0%, rgba(30, 60, 114, 0.18), transparent 60%);
	}

	.maintenance-card {
		width: 100%;
		max-width: 720px;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 14px;
		box-shadow: 0 18px 50px rgba(0, 0, 0, 0.08);
		padding: 36px 28px;
		text-align: center;
	}

	.maintenance-title {
		margin: 0 0 10px 0;
		font-size: clamp(1.6rem, 3.5vw, 2.4rem);
		line-height: 1.15;
		color: #0b1b3b;
	}

	.maintenance-subtitle {
		margin: 0;
		font-size: 1.05rem;
		color: rgba(11, 27, 59, 0.75);
	}
</style>
