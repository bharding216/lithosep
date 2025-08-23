<script>
	import { onMount } from 'svelte';

	// Props
	export let src = ''; // S3 URL or image key
	export let bucket = 'lithos-ep'; // Default bucket name
	export let alt = '';
	export let className = '';
	export let style = '';
	export let loading = 'lazy';
	export let expiresIn = 3600; // 1 hour default
	export let placeholder = '/logo.png'; // Fallback image
	export let width = undefined;
	export let height = undefined;

	// State
	let presignedUrl = '';
	let isLoading = true;
	let hasError = false;
	let imageElement;

	// Cache for presigned URLs (simple in-memory cache)
	const urlCache = new Map();

	async function fetchPresignedUrl() {
		if (!src) {
			hasError = true;
			isLoading = false;
			return;
		}

		// Check cache first
		const cacheKey = `${bucket}:${src}`;
		const cached = urlCache.get(cacheKey);
		
		if (cached && cached.expires > Date.now()) {
			presignedUrl = cached.url;
			isLoading = false;
			return;
		}

		try {
			const response = await fetch('/api/presigned-url', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					imageUrl: src.startsWith('http') ? src : undefined,
					bucket: src.startsWith('http') ? undefined : bucket,
					key: src.startsWith('http') ? undefined : src,
					expiresIn
				})
			});

			const data = await response.json();

			if (data.success) {
				presignedUrl = data.url;
				
				// Cache the URL (expires 5 minutes before actual expiry for safety)
				urlCache.set(cacheKey, {
					url: data.url,
					expires: Date.now() + (expiresIn - 300) * 1000
				});
			} else {
				console.error('Failed to get presigned URL:', data.error);
				hasError = true;
			}
		} catch (error) {
			console.error('Error fetching presigned URL:', error);
			hasError = true;
		} finally {
			isLoading = false;
		}
	}

	function handleImageLoad() {
		isLoading = false;
		hasError = false;
	}

	function handleImageError() {
		hasError = true;
		isLoading = false;
		console.error('Failed to load image:', presignedUrl);
	}

	onMount(() => {
		fetchPresignedUrl();
	});

	// Reactive statement to refetch when src changes
	$: if (src) {
		isLoading = true;
		hasError = false;
		fetchPresignedUrl();
	}
</script>

<div class="s3-image-container" class:loading={isLoading} class:error={hasError}>
	{#if isLoading}
		<div class="image-placeholder loading-placeholder" {style}>
			<div class="loading-spinner"></div>
			<span class="loading-text">Loading image...</span>
		</div>
	{:else if hasError || !presignedUrl}
		<img
			bind:this={imageElement}
			src={placeholder}
			{alt}
			class="s3-image error-image {className}"
			{style}
			{width}
			{height}
			{loading}
		/>
	{:else}
		<img
			bind:this={imageElement}
			src={presignedUrl}
			{alt}
			class="s3-image {className}"
			{style}
			{width}
			{height}
			{loading}
			on:load={handleImageLoad}
			on:error={handleImageError}
		/>
	{/if}
</div>

<style>
	.s3-image-container {
		display: inline-block;
		position: relative;
	}

	.s3-image {
		max-width: 100%;
		height: auto;
		transition: opacity 0.3s ease;
	}

	.image-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f9fa;
		border: 2px dashed #dee2e6;
		border-radius: 8px;
		min-height: 200px;
		min-width: 200px;
		color: #6c757d;
	}

	.loading-placeholder {
		animation: pulse 2s infinite;
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #f3f3f3;
		border-top: 4px solid #1e3c72;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 10px;
	}

	.loading-text {
		font-size: 14px;
		color: #666;
	}

	.error-image {
		opacity: 0.7;
		filter: grayscale(50%);
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	/* Responsive image styles */
	.s3-image-container.loading {
		min-height: 100px;
	}

	.s3-image-container.error {
		opacity: 0.8;
	}
</style>
