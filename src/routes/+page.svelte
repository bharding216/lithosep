<script>
	import S3Image from '$lib/components/S3Image.svelte';
</script>

<svelte:head>
	<title>Lithos E&P - Oil & Gas Expertise</title>
	<meta name="description" content="Expert consulting services for Oil & Gas, CCUS, Geothermal, Lithium, and Critical Minerals Materials" />
</svelte:head>

<section class="hero-section">
	<div class="hero-content">
		<h1 class="hero-title">Expert Consulting Solutions</h1>
		<h2 class="hero-subtitle">Oil & Gas • CCUS • Geothermal • Critical Minerals</h2>
		<p class="hero-description">
			Delivering comprehensive consulting services with deep industry expertise and innovative solutions 
			for complex engineering challenges across multiple sectors.
		</p>
		<div class="hero-cta">
			<a href="/portfolio" class="cta-button primary">View Our Work</a>
			<a href="/inquire" class="cta-button secondary">Get Started</a>
		</div>
	</div>
</section>

<section class="hero-image-section">
	<div class="hero-image-container">
		<S3Image 
			src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190327_122059.jpg"
			alt="Professional consulting project"
			className="hero-image"
			aspectRatio="21/9"
			objectFit="cover"
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
		/>
	</div>
</section>

<section class="services-preview">
	<div class="container">
		<h3 class="section-title">Our Expertise</h3>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-image">
					<S3Image 
						src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180710_134510.jpg"
						alt="Oil & Gas operations"
						className="service-card-image"
						aspectRatio="4/3"
						objectFit="cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
					/>
				</div>
				<div class="service-content">
					<h4>Oil & Gas</h4>
					<p>Comprehensive solutions for upstream, midstream, and downstream operations with focus on efficiency and safety.</p>
				</div>
			</div>
			<div class="service-card">
				<div class="service-image">
					<S3Image 
						src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180710_224804.jpg"
						alt="CCUS systems"
						className="service-card-image"
						aspectRatio="4/3"
						objectFit="cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
					/>
				</div>
				<div class="service-content">
					<h4>CCUS</h4>
					<p>Advanced carbon capture and storage systems for industrial and municipal applications.</p>
				</div>
			</div>
			<div class="service-card">
				<div class="service-image">
					<S3Image 
						src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/Gusher.jpg"
						alt="Geothermal energy"
						className="service-card-image"
						aspectRatio="4/3"
						objectFit="cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
					/>
				</div>
				<div class="service-content">
					<h4>Geothermal</h4>
					<p>Sustainable energy solutions leveraging geothermal resources for power generation and heating systems.</p>
				</div>
			</div>
			<div class="service-card">
				<div class="service-image">
					<S3Image 
						src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190130_102947.jpg"
						alt="Critical minerals processing"
						className="service-card-image"
						aspectRatio="4/3"
						objectFit="cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
					/>
				</div>
				<div class="service-content">
					<h4>Critical Minerals</h4>
					<p>Strategic consulting for lithium extraction and critical minerals processing operations.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="project-gallery">
	<div class="container">
		<h3 class="section-title">Recent Projects</h3>
		<div class="gallery-grid">
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20170613_125952.jpg"
					alt="Field operations project"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180328_094501.jpg"
					alt="Industrial facility"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/DSCF0431.JPG"
					alt="Technical equipment"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/SAM_3027.JPG"
					alt="Project site"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20181009_115833.jpg"
					alt="Engineering solution"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
			<div class="gallery-item">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190327_122103.jpg"
					alt="Consulting project"
					className="gallery-image"
					aspectRatio="16/10"
					objectFit="cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
		</div>
		<div class="gallery-cta">
			<a href="/portfolio" class="cta-button secondary">View Full Portfolio</a>
		</div>
	</div>
</section>

<style>
	.hero-section {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 80px 20px;
		text-align: center;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 3.5em;
		font-weight: bold;
		margin-bottom: 20px;
		line-height: 1.2;
		color: white;
	}

	.hero-subtitle {
		font-size: 1.5em;
		margin-bottom: 30px;
		opacity: 0.9;
		font-weight: 300;
		color: white;
	}

	.hero-description {
		font-size: 1.2em;
		line-height: 1.6;
		margin-bottom: 40px;
		opacity: 0.9;
		color: white;
	}

	.hero-cta {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-button {
		padding: 15px 30px;
		text-decoration: none;
		border-radius: 5px;
		font-weight: bold;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.cta-button.primary {
		background-color: var(--color-warning);
		color: white;
	}

	.cta-button.primary:hover {
		background-color: var(--color-warning-hover);
		transform: translateY(-2px);
	}

	.cta-button.secondary {
		background-color: transparent;
		color: white;
		border: 2px solid white;
	}

	.cta-button.secondary:hover {
		background-color: white;
		color: #1e3c72;
	}

	.hero-image-section {
		padding: 40px 0;
		background-color: #f8f9fa;
	}

	.hero-image-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	:global(.hero-image) {
		width: 100%;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.2);
	}

	.services-preview {
		padding: 80px 20px;
		background-color: #f8f9fa;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		text-align: center;
		font-size: 2.5em;
		margin-bottom: 50px;
		color: #333;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.service-card {
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.service-card:hover {
		transform: translateY(-5px);
	}

	.service-image {
		overflow: hidden;
	}

	:global(.service-card-image) {
		width: 100%;
		transition: transform 0.3s ease;
	}

	.service-card:hover :global(.service-card-image) {
		transform: scale(1.05);
	}

	.service-content {
		padding: 30px;
		text-align: center;
		flex: 1;
	}

	.service-content h4 {
		color: #1e3c72;
		font-size: 1.5em;
		margin-bottom: 15px;
	}

	.service-content p {
		color: #666;
		line-height: 1.6;
	}

	.project-gallery {
		padding: 80px 20px;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin-bottom: 40px;
	}

	.gallery-item {
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
		transition: transform 0.3s ease;
	}

	.gallery-item:hover {
		transform: translateY(-5px);
	}

	:global(.gallery-image) {
		width: 100%;
		transition: transform 0.3s ease;
	}

	.gallery-item:hover :global(.gallery-image) {
		transform: scale(1.05);
	}

	.gallery-cta {
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		.hero-title {
			font-size: 2.5em;
		}

		.hero-subtitle {
			font-size: 1.2em;
		}

		.hero-description {
			font-size: 1em;
		}

		.hero-cta {
			flex-direction: column;
			align-items: center;
		}

		.cta-button {
			width: 200px;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.gallery-grid {
			grid-template-columns: 1fr;
		}
		
		:global(.hero-image) {
			border-radius: 10px;
		}
		
		.hero-image-section {
			padding: 20px 0;
		}
	}
</style>
