<script>
	import S3Image from '$lib/components/S3Image.svelte';
</script>

<svelte:head>
	<title>Professional Consulting Services - Oil & Gas Expertise</title>
	<meta name="description" content="Expert consulting services for Oil & Gas, Water Processing, Geothermal, Lithium, and Critical Minerals Materials" />
</svelte:head>

<section class="hero-section">
	<div class="hero-content">
		<h1 class="hero-title">Expert Consulting Solutions</h1>
		<h2 class="hero-subtitle">Oil & Gas • Water Processing • Geothermal • Critical Minerals</h2>
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
			src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/130.JPG"
			alt="Professional consulting project"
			className="hero-image"
		/>
	</div>
</section>

<section class="services-preview">
	<div class="container">
		<h3 class="section-title">Our Expertise</h3>
		<div class="services-grid">
			<div class="service-card">
				<h4>Oil & Gas</h4>
				<p>Comprehensive solutions for upstream, midstream, and downstream operations with focus on efficiency and safety.</p>
			</div>
			<div class="service-card">
				<h4>Water Processing</h4>
				<p>Advanced water treatment and management systems for industrial and municipal applications.</p>
			</div>
			<div class="service-card">
				<h4>Geothermal</h4>
				<p>Sustainable energy solutions leveraging geothermal resources for power generation and heating systems.</p>
			</div>
			<div class="service-card">
				<h4>Critical Minerals</h4>
				<p>Strategic consulting for lithium extraction and critical minerals processing operations.</p>
			</div>
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
	}

	.hero-subtitle {
		font-size: 1.5em;
		margin-bottom: 30px;
		opacity: 0.9;
		font-weight: 300;
	}

	.hero-description {
		font-size: 1.2em;
		line-height: 1.6;
		margin-bottom: 40px;
		opacity: 0.9;
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
		background-color: #ff6b35;
		color: white;
	}

	.cta-button.primary:hover {
		background-color: #e55a2b;
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
		padding: 0;
		background-color: #f8f9fa;
	}

	.hero-image-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	:global(.hero-image) {
		width: 100%;
		height: 400px;
		object-fit: cover;
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
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
		text-align: center;
		transition: transform 0.3s ease;
	}

	.service-card:hover {
		transform: translateY(-5px);
	}

	.service-card h4 {
		color: #1e3c72;
		font-size: 1.5em;
		margin-bottom: 15px;
	}

	.service-card p {
		color: #666;
		line-height: 1.6;
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
	}
</style>
