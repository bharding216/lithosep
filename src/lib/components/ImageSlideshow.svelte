<script>
	import S3Image from './S3Image.svelte';
	
	export let images = [];
	export let alt = '';
	export let className = '';
	export let aspectRatio = '16/10';
	export let objectFit = 'cover';
	export let sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px';
	
	let currentIndex = 0;
	
	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}
	
	function prevImage() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}
	
	function goToImage(index) {
		currentIndex = index;
	}
</script>

<div class="slideshow-container {className}">
	{#if images && images.length > 0}
		<div class="slideshow-wrapper">
			<S3Image 
				src={images[currentIndex]}
				{alt}
				className="slideshow-image"
				{aspectRatio}
				{objectFit}
				{sizes}
			/>
			
			{#if images.length > 1}
				<!-- Navigation arrows -->
				<button class="nav-arrow prev" on:click={prevImage} aria-label="Previous image">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				
				<button class="nav-arrow next" on:click={nextImage} aria-label="Next image">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				
				<!-- Dots indicator -->
				<div class="dots-container">
					{#each images as _, index}
						<button 
							class="dot {index === currentIndex ? 'active' : ''}"
							on:click={() => goToImage(index)}
							aria-label="Go to image {index + 1}"
						></button>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.slideshow-container {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	
	.slideshow-wrapper {
		position: relative;
		width: 100%;
	}
	
	:global(.slideshow-image) {
		width: 100%;
		transition: transform 0.3s ease;
	}
	
	.nav-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.6);
		color: white;
		border: none;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 2;
		opacity: 0;
	}
	
	.slideshow-container:hover .nav-arrow {
		opacity: 1;
	}
	
	.nav-arrow:hover {
		background: rgba(0, 0, 0, 0.8);
		transform: translateY(-50%) scale(1.1);
	}
	
	.nav-arrow.prev {
		left: 15px;
	}
	
	.nav-arrow.next {
		right: 15px;
	}
	
	.dots-container {
		position: absolute;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 2;
	}
	
	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid white;
		background: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.dot:hover {
		background: rgba(255, 255, 255, 0.6);
		transform: scale(1.2);
	}
	
	.dot.active {
		background: white;
	}
	
	/* Mobile optimizations */
	@media (max-width: 768px) {
		.nav-arrow {
			width: 40px;
			height: 40px;
			opacity: 1;
		}
		
		.nav-arrow.prev {
			left: 10px;
		}
		
		.nav-arrow.next {
			right: 10px;
		}
		
		.dots-container {
			bottom: 10px;
		}
		
		.dot {
			width: 10px;
			height: 10px;
		}
	}
</style>