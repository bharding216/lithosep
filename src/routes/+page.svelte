<script>
	import S3Image from '$lib/components/S3Image.svelte';
</script>

<svelte:head>
	<title>Lithos E&P - Oil & Gas Expertise</title>
	<meta name="description" content="Expert consulting services for Oil & Gas, CCUS, Geothermal, Lithium, and Critical Minerals Materials" />
</svelte:head>

<section class="hero-section">
	<div class="hero-background">
		<S3Image 
			src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190327_122059.jpg"
			alt="Professional consulting project"
			className="hero-background-image"
			objectFit="cover"
			sizes="100vw"
		/>
	</div>
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

<section class="portfolio-cta-section">
	<div class="container">
		<div class="portfolio-cta">
			<h3 class="cta-title">Ready to See Our Work?</h3>
			<p class="cta-description">Explore our comprehensive portfolio of successful projects across multiple industries.</p>
			<a href="/portfolio" class="cta-button secondary">View Full Portfolio</a>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		color: white;
		padding: 80px 20px;
		text-align: center;
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.hero-background-image) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
		opacity: 0.7;
		display: block;
	}

	.hero-background::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(30, 60, 114, 0.4) 0%, rgba(42, 82, 152, 0.4) 100%);
		z-index: 2;
	}

	.hero-content {
		position: relative;
		z-index: 3;
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
		background-color: var(--color-accent);
		color: white;
	}

	.cta-button.primary:hover {
		background-color: var(--color-accent-hover);
		transform: translateY(-2px);
	}

	.cta-button.secondary {
		background-color: white;
		color: rgb(5, 16, 112);
		border: 2px solid white;
	}

	.cta-button.secondary:hover {
		background-color: rgb(241, 240, 255);
		color: #1e3c72;
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

	.portfolio-cta-section {
		padding: 80px 20px;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
	}

	.portfolio-cta {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-title {
		font-size: 2.5em;
		color: #1e3c72;
		margin-bottom: 20px;
	}

	.cta-description {
		font-size: 1.2em;
		color: #666;
		line-height: 1.6;
		margin-bottom: 30px;
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

		.cta-title {
			font-size: 2em;
		}

		.cta-description {
			font-size: 1em;
		}
	}
</style>
