<svelte:head>
	<title>Resources - Publications & Applications</title>
	<meta name="description" content="Access our technical publications, research papers, and industry applications" />
</svelte:head>

<script>
	let selectedCategory = 'publications';
	
	const resources = {
		publications: [
			{
				title: "Advanced Oil Recovery Techniques in Deepwater Operations",
				type: "Technical Paper",
				date: "2023",
				description: "Comprehensive analysis of enhanced oil recovery methods for deepwater drilling operations, including case studies and performance metrics.",
				tags: ["Oil & Gas", "Deepwater", "Recovery"],
				status: "Published"
			},
			{
				title: "Sustainable Water Treatment Technologies for Industrial Applications",
				type: "Research Paper",
				date: "2023",
				description: "Investigation of innovative water treatment technologies with focus on sustainability and cost-effectiveness for industrial processes.",
				tags: ["Water Processing", "Sustainability", "Industrial"],
				status: "Published"
			},
			{
				title: "Geothermal Energy Integration in Industrial Processes",
				type: "Conference Paper",
				date: "2022",
				description: "Analysis of geothermal energy integration opportunities in various industrial applications and associated economic benefits.",
				tags: ["Geothermal", "Industrial", "Energy"],
				status: "Published"
			},
			{
				title: "Critical Minerals Processing: Environmental and Economic Considerations",
				type: "Technical Report",
				date: "2022",
				description: "Comprehensive review of critical minerals processing technologies with emphasis on environmental impact and economic viability.",
				tags: ["Critical Minerals", "Environment", "Economics"],
				status: "Published"
			}
		],
		applications: [
			{
				title: "Pipeline Integrity Assessment Tool",
				type: "Software Application",
				date: "2023",
				description: "Advanced software tool for comprehensive pipeline integrity assessment, risk analysis, and maintenance planning.",
				tags: ["Oil & Gas", "Pipeline", "Assessment"],
				status: "Available"
			},
			{
				title: "Water Treatment Process Optimizer",
				type: "Calculation Tool",
				date: "2023",
				description: "Optimization tool for water treatment processes, including chemical dosing calculations and efficiency analysis.",
				tags: ["Water Processing", "Optimization", "Efficiency"],
				status: "Available"
			},
			{
				title: "Geothermal Resource Calculator",
				type: "Assessment Tool",
				date: "2022",
				description: "Resource assessment tool for evaluating geothermal potential and economic feasibility of geothermal projects.",
				tags: ["Geothermal", "Assessment", "Economics"],
				status: "Available"
			},
			{
				title: "Critical Minerals Market Analysis Dashboard",
				type: "Analytics Platform",
				date: "2022",
				description: "Real-time market analysis dashboard for critical minerals pricing, supply chain, and demand forecasting.",
				tags: ["Critical Minerals", "Market Analysis", "Forecasting"],
				status: "Available"
			}
		]
	};
</script>

<div class="resources-container">
	<div class="resources-header">
		<h1>Resources</h1>
		<p class="header-subtitle">Technical publications and industry applications</p>
	</div>

	<div class="category-tabs">
		<button 
			class="category-tab {selectedCategory === 'publications' ? 'active' : ''}"
			on:click={() => selectedCategory = 'publications'}
		>
			Publications
		</button>
		<button 
			class="category-tab {selectedCategory === 'applications' ? 'active' : ''}"
			on:click={() => selectedCategory = 'applications'}
		>
			Applications
		</button>
	</div>

	<div class="category-content">
		{#if selectedCategory === 'publications'}
			<div class="section-intro">
				<h2>Technical Publications</h2>
				<p>
					Our published research and technical papers contribute to industry knowledge and best practices. 
					These publications reflect our commitment to advancing the field through rigorous research and practical insights.
				</p>
			</div>
		{:else}
			<div class="section-intro">
				<h2>Industry Applications</h2>
				<p>
					Practical tools and applications developed to solve real-world engineering challenges. 
					These resources are designed to enhance operational efficiency and support decision-making processes.
				</p>
			</div>
		{/if}

		<div class="resources-grid">
			{#each resources[selectedCategory] as resource}
				<div class="resource-card">
					<div class="resource-header">
						<h3>{resource.title}</h3>
						<div class="resource-meta">
							<span class="resource-type">{resource.type}</span>
							<span class="resource-date">{resource.date}</span>
						</div>
					</div>
					
					<div class="resource-content">
						<p class="resource-description">{resource.description}</p>
						
						<div class="resource-tags">
							{#each resource.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
					
					<div class="resource-footer">
						<span class="status-badge {resource.status.toLowerCase()}">{resource.status}</span>
						<button class="resource-action">
							{selectedCategory === 'publications' ? 'View Publication' : 'Access Tool'}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="additional-resources">
		<h2>Additional Resources</h2>
		<div class="additional-grid">
			<div class="additional-item">
				<h4>Industry Standards</h4>
				<p>Comprehensive database of relevant industry standards and regulations</p>
			</div>
			<div class="additional-item">
				<h4>Best Practices Guide</h4>
				<p>Curated collection of industry best practices and lessons learned</p>
			</div>
			<div class="additional-item">
				<h4>Technical Webinars</h4>
				<p>Regular webinar series covering emerging technologies and trends</p>
			</div>
			<div class="additional-item">
				<h4>Case Study Library</h4>
				<p>Detailed case studies from successful project implementations</p>
			</div>
		</div>
	</div>

	<div class="contact-section">
		<h2>Need Custom Solutions?</h2>
		<p>Contact us to discuss custom research, publications, or application development for your specific needs.</p>
		<a href="/inquire" class="contact-button">Get in Touch</a>
	</div>
</div>

<style>
	.resources-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.resources-header {
		text-align: center;
		margin-bottom: 50px;
	}

	.resources-header h1 {
		font-size: 3em;
		color: #1e3c72;
		margin-bottom: 15px;
	}

	.header-subtitle {
		font-size: 1.3em;
		color: #666;
		font-style: italic;
	}

	.category-tabs {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-bottom: 40px;
	}

	.category-tab {
		padding: 12px 30px;
		border: 2px solid #1e3c72;
		background: white;
		color: #1e3c72;
		border-radius: 25px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		font-size: 1.1em;
	}

	.category-tab:hover {
		background: #f0f4ff;
	}

	.category-tab.active {
		background: #1e3c72;
		color: white;
	}

	.section-intro {
		text-align: center;
		margin-bottom: 50px;
		padding: 30px;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		border-radius: 15px;
	}

	.section-intro h2 {
		color: #1e3c72;
		font-size: 2.5em;
		margin-bottom: 20px;
	}

	.section-intro p {
		font-size: 1.1em;
		color: #666;
		line-height: 1.7;
		max-width: 800px;
		margin: 0 auto;
	}

	.resources-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 30px;
		margin-bottom: 60px;
	}

	.resource-card {
		background: white;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.resource-card:hover {
		transform: translateY(-5px);
	}

	.resource-header {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 25px;
	}

	.resource-header h3 {
		margin: 0 0 15px 0;
		font-size: 1.3em;
		line-height: 1.4;
	}

	.resource-meta {
		display: flex;
		justify-content: space-between;
		font-size: 0.9em;
		opacity: 0.9;
	}

	.resource-type {
		background: rgba(255,255,255,0.2);
		padding: 4px 8px;
		border-radius: 12px;
	}

	.resource-content {
		padding: 25px;
	}

	.resource-description {
		color: #333;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.resource-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 20px;
	}

	.tag {
		background: #f0f4ff;
		color: #1e3c72;
		padding: 4px 12px;
		border-radius: 15px;
		font-size: 0.85em;
		font-weight: 500;
	}

	.resource-footer {
		padding: 0 25px 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.status-badge {
		padding: 6px 12px;
		border-radius: 15px;
		font-size: 0.8em;
		font-weight: 500;
	}

	.status-badge.published {
		background: #d4edda;
		color: #155724;
	}

	.status-badge.available {
		background: #cce5ff;
		color: #004085;
	}

	.resource-action {
		background: #1e3c72;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.9em;
		transition: background 0.3s ease;
	}

	.resource-action:hover {
		background: #2a5298;
	}

	.additional-resources {
		margin-bottom: 60px;
	}

	.additional-resources h2 {
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

	.contact-section {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 50px;
		border-radius: 15px;
		text-align: center;
	}

	.contact-section h2 {
		font-size: 2.5em;
		margin-bottom: 20px;
	}

	.contact-section p {
		font-size: 1.2em;
		margin-bottom: 30px;
		opacity: 0.9;
	}

	.contact-button {
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

	.contact-button:hover {
		background: #e55a2b;
		transform: translateY(-2px);
		color: white;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.resources-header h1 {
			font-size: 2.5em;
		}

		.resources-grid {
			grid-template-columns: 1fr;
		}

		.additional-grid {
			grid-template-columns: 1fr;
		}

		.category-tabs {
			flex-direction: column;
			align-items: center;
		}

		.category-tab {
			width: 200px;
		}

		.section-intro {
			padding: 20px;
		}

		.contact-section {
			padding: 40px 20px;
		}

		.contact-section h2 {
			font-size: 2em;
		}
	}
</style>
