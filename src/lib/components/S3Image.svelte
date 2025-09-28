<script>
	import { onMount } from 'svelte';

	// Props
	export let src = ''; // S3 URL or image key
	export let bucket = 'lithos-ep'; // Default bucket name
	export let alt = '';
	export let className = '';
	export let style = '';
	export let loading = 'lazy';
	export let placeholder = '/logo.png'; // Fallback image
	export let width = undefined;
	export let height = undefined;
	export let aspectRatio = undefined; // e.g., '16/9', '4/3', '1/1'
	export let objectFit = 'cover'; // 'cover', 'contain', 'fill', 'none', 'scale-down'
	export let sizes = undefined; // Responsive sizes attribute

	// State
	let directUrl = '';
	let isLoading = true;
	let hasError = false;
	let imageElement;

	function generateImageUrl() {
		if (!src) {
			hasError = true;
			isLoading = false;
			return;
		}

		try {
			// If src is already a full URL, use it directly
			if (src.startsWith('http')) {
				directUrl = src;
			} else {
				// Generate direct S3 URL from key
				directUrl = `https://${bucket}.s3.us-east-2.amazonaws.com/${encodeURIComponent(src)}`;
			}
			isLoading = false;
		} catch (error) {
			console.error('Error generating image URL:', error);
			hasError = true;
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
	}

	onMount(() => {
		generateImageUrl();
	});

	// Reactive statement to regenerate URL when src changes
	$: if (src) {
		isLoading = true;
		hasError = false;
		generateImageUrl();
	}

	// Generate dynamic styles based on props
	$: dynamicStyle = [
		style,
		aspectRatio ? `aspect-ratio: ${aspectRatio}` : '',
		objectFit ? `object-fit: ${objectFit}` : ''
	].filter(Boolean).join('; ');
</script>

<div class="s3-image-container" class:loading={isLoading} class:error={hasError}>
	{#if isLoading}
		<div class="image-placeholder loading-placeholder" style={dynamicStyle}>
			<div class="loading-spinner"></div>
			<span class="loading-text">Loading image...</span>
		</div>
	{:else if hasError || !directUrl}
		<img
			bind:this={imageElement}
			src={placeholder}
			{alt}
			class="s3-image error-image {className}"
			style={dynamicStyle}
			{width}
			{height}
			{loading}
			{sizes}
		/>
	{:else}
		<img
			bind:this={imageElement}
			src={directUrl}
			{alt}
			class="s3-image {className}"
			style={dynamicStyle}
			{width}
			{height}
			{loading}
			{sizes}
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
		display: block;
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