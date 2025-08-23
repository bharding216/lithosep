<svelte:head>
	<title>Services - Consulting Solutions & Expertise</title>
	<meta name="description" content="Comprehensive consulting services for Oil & Gas, Water Processing, Geothermal, and Critical Minerals industries" />
</svelte:head>

<div class="services-container">
	<div class="services-header">
		<h1>Our Consulting Services</h1>
		<p class="header-subtitle">Comprehensive solutions for complex engineering challenges</p>
	</div>

	<div class="services-overview">
		<div class="overview-content">
			<h2>What We Offer</h2>
			<p>
				Our consulting practice provides end-to-end solutions across multiple industry sectors. 
				From initial feasibility studies to full project implementation, we deliver expert guidance 
				that ensures successful outcomes for our clients.
			</p>
		</div>
	</div>

	<div class="services-grid">
		<div class="service-category">
			<div class="category-header">
				<h3>Oil & Gas Consulting</h3>
				<div class="category-icon">⚡</div>
			</div>
			<div class="service-list">
				<div class="service-item">
					<h4>Upstream Operations</h4>
					<p>Exploration, drilling optimization, and production enhancement strategies</p>
				</div>
				<div class="service-item">
					<h4>Midstream Solutions</h4>
					<p>Pipeline design, transportation systems, and storage facility optimization</p>
				</div>
				<div class="service-item">
					<h4>Downstream Processing</h4>
					<p>Refinery optimization, product quality improvement, and process efficiency</p>
				</div>
				<div class="service-item">
					<h4>Safety & Compliance</h4>
					<p>Regulatory compliance, safety system design, and risk management</p>
				</div>
			</div>
		</div>

		<div class="service-category">
			<div class="category-header">
				<h3>Water Processing</h3>
				<div class="category-icon">💧</div>
			</div>
			<div class="service-list">
				<div class="service-item">
					<h4>Treatment System Design</h4>
					<p>Advanced water treatment technologies for industrial and municipal use</p>
				</div>
				<div class="service-item">
					<h4>Process Optimization</h4>
					<p>Efficiency improvements and cost reduction strategies</p>
				</div>
				<div class="service-item">
					<h4>Environmental Compliance</h4>
					<p>Regulatory adherence and environmental impact mitigation</p>
				</div>
				<div class="service-item">
					<h4>System Integration</h4>
					<p>Seamless integration with existing infrastructure</p>
				</div>
			</div>
		</div>

		<div class="service-category">
			<div class="category-header">
				<h3>Geothermal Energy</h3>
				<div class="category-icon">🌋</div>
			</div>
			<div class="service-list">
				<div class="service-item">
					<h4>Resource Assessment</h4>
					<p>Geological surveys and geothermal potential evaluation</p>
				</div>
				<div class="service-item">
					<h4>Plant Design</h4>
					<p>Power generation facility design and optimization</p>
				</div>
				<div class="service-item">
					<h4>Direct Use Applications</h4>
					<p>Heating systems and industrial process applications</p>
				</div>
				<div class="service-item">
					<h4>Project Development</h4>
					<p>From feasibility to commissioning and operation</p>
				</div>
			</div>
		</div>

		<div class="service-category">
			<div class="category-header">
				<h3>Critical Minerals</h3>
				<div class="category-icon">💎</div>
			</div>
			<div class="service-list">
				<div class="service-item">
					<h4>Lithium Extraction</h4>
					<p>Advanced extraction technologies and process optimization</p>
				</div>
				<div class="service-item">
					<h4>Processing Operations</h4>
					<p>Mineral processing and purification systems</p>
				</div>
				<div class="service-item">
					<h4>Feasibility Studies</h4>
					<p>Economic and technical viability assessments</p>
				</div>
				<div class="service-item">
					<h4>Sustainability Planning</h4>
					<p>Environmental stewardship and sustainable practices</p>
				</div>
			</div>
		</div>
	</div>

	<div class="additional-services">
		<h2>Additional Consulting Services</h2>
		<div class="additional-grid">
			<div class="additional-item">
				<h4>Project Management</h4>
				<p>End-to-end project execution from planning to completion</p>
			</div>
			<div class="additional-item">
				<h4>Regulatory Support</h4>
				<p>Permitting, compliance, and regulatory navigation</p>
			</div>
			<div class="additional-item">
				<h4>Risk Assessment</h4>
				<p>Comprehensive risk analysis and mitigation strategies</p>
			</div>
			<div class="additional-item">
				<h4>Technology Integration</h4>
				<p>Implementation of cutting-edge technologies and systems</p>
			</div>
			<div class="additional-item">
				<h4>Training & Development</h4>
				<p>Staff training and capability development programs</p>
			</div>
			<div class="additional-item">
				<h4>Strategic Planning</h4>
				<p>Long-term strategic planning and business development</p>
			</div>
		</div>
	</div>

	<div class="cta-section">
		<h2>Ready to Get Started?</h2>
		<p>Contact us to discuss your project requirements and discover how our expertise can drive your success.</p>
		<a href="/inquire" class="cta-button">Schedule a Consultation</a>
	</div>
</div>

<style>
	.services-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.services-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.services-header h1 {
		font-size: 3em;
		color: #1e3c72;
		margin-bottom: 15px;
	}

	.header-subtitle {
		font-size: 1.3em;
		color: #666;
		font-style: italic;
	}

	.services-overview {
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		padding: 40px;
		border-radius: 15px;
		margin-bottom: 60px;
		text-align: center;
	}

	.services-overview h2 {
		color: #1e3c72;
		font-size: 2.2em;
		margin-bottom: 20px;
	}

	.services-overview p {
		font-size: 1.1em;
		color: #666;
		line-height: 1.7;
		max-width: 800px;
		margin: 0 auto;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		margin-bottom: 60px;
	}

	.service-category {
		background: white;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.service-category:hover {
		transform: translateY(-5px);
	}

	.category-header {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 25px;
		text-align: center;
		position: relative;
	}

	.category-header h3 {
		margin: 0;
		font-size: 1.5em;
	}

	.category-icon {
		font-size: 2em;
		margin-top: 10px;
	}

	.service-list {
		padding: 25px;
	}

	.service-item {
		margin-bottom: 25px;
		padding-bottom: 20px;
		border-bottom: 1px solid #f0f0f0;
	}

	.service-item:last-child {
		margin-bottom: 0;
		border-bottom: none;
		padding-bottom: 0;
	}

	.service-item h4 {
		color: #1e3c72;
		font-size: 1.2em;
		margin-bottom: 8px;
	}

	.service-item p {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.additional-services {
		margin-bottom: 60px;
	}

	.additional-services h2 {
		text-align: center;
		color: #1e3c72;
		font-size: 2.5em;
		margin-bottom: 40px;
	}

	.additional-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 25px;
	}

	.additional-item {
		background: white;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
		text-align: center;
		transition: transform 0.3s ease;
	}

	.additional-item:hover {
		transform: translateY(-3px);
	}

	.additional-item h4 {
		color: #1e3c72;
		font-size: 1.3em;
		margin-bottom: 15px;
	}

	.additional-item p {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.cta-section {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 50px;
		border-radius: 15px;
		text-align: center;
	}

	.cta-section h2 {
		font-size: 2.5em;
		margin-bottom: 20px;
	}

	.cta-section p {
		font-size: 1.2em;
		margin-bottom: 30px;
		opacity: 0.9;
	}

	.cta-button {
		display: inline-block;
		background: #ff6b35;
		color: white;
		padding: 15px 30px;
		text-decoration: none;
		border-radius: 5px;
		font-weight: bold;
		font-size: 1.1em;
		transition: all 0.3s ease;
	}

	.cta-button:hover {
		background: #e55a2b;
		transform: translateY(-2px);
		color: white;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.services-header h1 {
			font-size: 2.5em;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.additional-grid {
			grid-template-columns: 1fr;
		}

		.services-overview {
			padding: 30px 20px;
		}

		.cta-section {
			padding: 40px 20px;
		}

		.cta-section h2 {
			font-size: 2em;
		}
	}
</style>