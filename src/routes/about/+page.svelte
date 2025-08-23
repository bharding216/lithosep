<script>
	import S3Image from '$lib/components/S3Image.svelte';
</script>

<svelte:head>
	<title>About - Professional Consulting Profile</title>
	<meta name="description" content="Learn about our consulting expertise and professional background in Oil & Gas, Water Processing, Geothermal, and Critical Minerals" />
</svelte:head>

<div class="about-container">
	<div class="about-header">
		<h1>About Our Consulting Practice</h1>
		<p class="header-subtitle">Expert guidance for complex engineering challenges</p>
	</div>

	<div class="about-content">
		<div class="profile-section">
			<div class="profile-image">
				<S3Image 
					src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/130.JPG"
					alt="Professional consulting team"
					className="about-profile-image"
					placeholder="/Headshot3_IG.jpg"
				/>
			</div>
			<div class="profile-info">
				<h2>Professional Excellence</h2>
				<p class="lead-text">
					With decades of experience in the energy and industrial sectors, our consulting practice 
					delivers innovative solutions that drive operational efficiency and sustainable growth.
				</p>
				<p>
					Our expertise spans critical industries including Oil & Gas operations, Water Processing systems, 
					Geothermal energy development, and Critical Minerals extraction. We combine deep technical 
					knowledge with practical implementation experience to solve complex engineering challenges.
				</p>
			</div>
		</div>

		<div class="expertise-grid">
			<div class="expertise-card">
				<h3>Technical Expertise</h3>
				<ul>
					<li>Process Engineering & Optimization</li>
					<li>Project Management & Execution</li>
					<li>Regulatory Compliance & Safety</li>
					<li>Environmental Impact Assessment</li>
					<li>Risk Analysis & Mitigation</li>
				</ul>
			</div>

			<div class="expertise-card">
				<h3>Industry Experience</h3>
				<ul>
					<li>Upstream, Midstream & Downstream Oil & Gas</li>
					<li>Industrial Water Treatment Systems</li>
					<li>Geothermal Energy Development</li>
					<li>Lithium & Critical Minerals Processing</li>
					<li>Infrastructure Development</li>
				</ul>
			</div>

			<div class="expertise-card">
				<h3>Core Values</h3>
				<ul>
					<li>Safety-First Approach</li>
					<li>Environmental Stewardship</li>
					<li>Innovation & Efficiency</li>
					<li>Client-Focused Solutions</li>
					<li>Continuous Improvement</li>
				</ul>
			</div>
		</div>

		<div class="credentials-section">
			<h2>Professional Credentials</h2>
			<div class="credentials-grid">
				<div class="credential-item">
					<h4>Education</h4>
					<p>Advanced degrees in Engineering and related fields</p>
				</div>
				<div class="credential-item">
					<h4>Certifications</h4>
					<p>Professional Engineering licenses and industry certifications</p>
				</div>
				<div class="credential-item">
					<h4>Experience</h4>
					<p>20+ years in energy and industrial consulting</p>
				</div>
				<div class="credential-item">
					<h4>Publications</h4>
					<p>Technical papers and industry publications</p>
				</div>
			</div>
		</div>

		<div class="approach-section">
			<h2>Our Approach</h2>
			<div class="approach-steps">
				<div class="step">
					<div class="step-number">1</div>
					<h4>Assessment</h4>
					<p>Comprehensive analysis of current operations and challenges</p>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<h4>Strategy</h4>
					<p>Development of tailored solutions and implementation roadmap</p>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<h4>Implementation</h4>
					<p>Hands-on support throughout project execution</p>
				</div>
				<div class="step">
					<div class="step-number">4</div>
					<h4>Optimization</h4>
					<p>Continuous monitoring and improvement of implemented solutions</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.about-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.about-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.about-header h1 {
		font-size: 3em;
		color: #1e3c72;
		margin-bottom: 15px;
	}

	.header-subtitle {
		font-size: 1.3em;
		color: #666;
		font-style: italic;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	.profile-section {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 40px;
		align-items: center;
	}

	.profile-image :global(.about-profile-image) {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
	}

	.profile-info h2 {
		color: #1e3c72;
		font-size: 2.2em;
		margin-bottom: 20px;
	}

	.lead-text {
		font-size: 1.2em;
		color: #333;
		margin-bottom: 20px;
		font-weight: 500;
	}

	.profile-info p {
		color: #666;
		line-height: 1.7;
		margin-bottom: 15px;
	}

	.expertise-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.expertise-card {
		background: white;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
	}

	.expertise-card h3 {
		color: #1e3c72;
		font-size: 1.5em;
		margin-bottom: 20px;
		text-align: center;
	}

	.expertise-card ul {
		list-style: none;
		padding: 0;
	}

	.expertise-card li {
		padding: 8px 0;
		border-bottom: 1px solid #f0f0f0;
		color: #666;
	}

	.expertise-card li:last-child {
		border-bottom: none;
	}

	.expertise-card li::before {
		content: "✓";
		color: #1e3c72;
		font-weight: bold;
		margin-right: 10px;
	}

	.credentials-section h2 {
		text-align: center;
		color: #1e3c72;
		font-size: 2.5em;
		margin-bottom: 40px;
	}

	.credentials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.credential-item {
		text-align: center;
		padding: 25px;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		border-radius: 10px;
	}

	.credential-item h4 {
		color: #1e3c72;
		font-size: 1.3em;
		margin-bottom: 15px;
	}

	.credential-item p {
		color: #666;
		line-height: 1.6;
	}

	.approach-section h2 {
		text-align: center;
		color: #1e3c72;
		font-size: 2.5em;
		margin-bottom: 40px;
	}

	.approach-steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.step {
		text-align: center;
		padding: 30px 20px;
	}

	.step-number {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5em;
		font-weight: bold;
		margin: 0 auto 20px;
	}

	.step h4 {
		color: #1e3c72;
		font-size: 1.3em;
		margin-bottom: 15px;
	}

	.step p {
		color: #666;
		line-height: 1.6;
	}

	@media screen and (max-width: 768px) {
		.about-header h1 {
			font-size: 2.5em;
		}

		.profile-section {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.expertise-grid {
			grid-template-columns: 1fr;
		}

		.credentials-grid {
			grid-template-columns: 1fr;
		}

		.approach-steps {
			grid-template-columns: 1fr;
		}
	}
</style>