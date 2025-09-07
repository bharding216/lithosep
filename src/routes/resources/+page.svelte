<svelte:head>
	<title>Resources - Publications & Applications</title>
	<meta name="description" content="Access our technical publications, research papers, and industry applications" />
</svelte:head>

<script>
	export let data;
	
	let selectedCategory = 'publications';
	let downloadingFiles = new Set();
	
	// Function to download a file using presigned URL
	async function downloadFile(key, fileName) {
		if (downloadingFiles.has(key)) return;
		
		downloadingFiles.add(key);
		downloadingFiles = downloadingFiles; // Trigger reactivity
		
		try {
			const response = await fetch('/api/presigned-url', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					bucket: 'lithos-ep',
					key: key,
					expiresIn: 300 // 5 minutes
				})
			});
			
			const result = await response.json();
			
			if (result.success) {
				// Create a temporary link and trigger download
				const link = document.createElement('a');
				link.href = result.url;
				link.download = fileName;
				link.target = '_blank';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			} else {
				console.error('Failed to generate download URL:', result.error);
				alert('Failed to download file. Please try again.');
			}
		} catch (error) {
			console.error('Download error:', error);
			alert('Failed to download file. Please try again.');
		} finally {
			downloadingFiles.delete(key);
			downloadingFiles = downloadingFiles; // Trigger reactivity
		}
	}
	
	// Function to format file size
	function formatFileSize(bytes) {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
	}
	
	// Function to format date
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'short', 
			day: 'numeric' 
		});
	}
	
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
				tags: ["CCUS", "Sustainability", "Industrial"],
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
				tags: ["CCUS", "Optimization", "Efficiency"],
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
			class="category-tab {selectedCategory === 'journals' ? 'active' : ''}"
			on:click={() => selectedCategory = 'journals'}
		>
			Journal Articles
		</button>
		<button 
			class="category-tab {selectedCategory === 'papers' ? 'active' : ''}"
			on:click={() => selectedCategory = 'papers'}
		>
			Technical Papers
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
						</div>
					</div>
				{/each}
			</div>
			
		{:else if selectedCategory === 'journals'}
			<div class="section-intro">
				<h2>Journal Articles</h2>
				<p>
					Published articles in industry journals showcasing our research and expertise in various technical domains.
					These peer-reviewed publications demonstrate our commitment to advancing industry knowledge.
				</p>
			</div>
			
			<div class="publications-grid">
				{#each data.publications.journals as journal}
					<div class="publication-card journal-card">
						<div class="publication-header">
							<h3>{journal.title}</h3>
							<div class="publication-meta">
								<span class="publication-type">Journal Article</span>
								<span class="publication-date">{formatDate(journal.lastModified)}</span>
							</div>
						</div>
						
						<div class="publication-content">
							<div class="publication-info">
								<span class="file-size">{formatFileSize(journal.size)}</span>
								<span class="file-type">PDF</span>
							</div>
						</div>
						
						<div class="publication-footer">
							<button 
								class="download-button"
								on:click={() => downloadFile(journal.key, journal.fileName)}
								disabled={downloadingFiles.has(journal.key)}
							>
								{downloadingFiles.has(journal.key) ? 'Downloading...' : 'Download PDF'}
							</button>
						</div>
					</div>
				{/each}
			</div>
			
		{:else if selectedCategory === 'papers'}
			<div class="section-intro">
				<h2>Technical Papers</h2>
				<p>
					Collection of technical papers and research documents covering various aspects of our engineering expertise.
					These documents provide detailed insights into our methodologies and technical approaches.
				</p>
			</div>
			
			<div class="papers-grid">
				{#each data.publications.papers as paper}
					<div class="paper-card">
						<div class="paper-content">
							<div class="paper-icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div class="paper-info">
								<h4>{paper.fileName.replace('.pdf', '')}</h4>
								<div class="paper-meta">
									<span class="file-size">{formatFileSize(paper.size)}</span>
									<span class="file-date">{formatDate(paper.lastModified)}</span>
								</div>
							</div>
						</div>
						
						<button 
							class="paper-download-button"
							on:click={() => downloadFile(paper.key, paper.fileName)}
							disabled={downloadingFiles.has(paper.key)}
						>
							{downloadingFiles.has(paper.key) ? '⏳' : '⬇️'}
						</button>
					</div>
				{/each}
			</div>
			
		{:else if selectedCategory === 'applications'}
			<div class="section-intro">
				<h2>Industry Applications</h2>
				<p>
					Practical tools and applications developed to solve real-world engineering challenges. 
					These resources are designed to enhance operational efficiency and support decision-making processes.
				</p>
			</div>
			
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
						</div>
					</div>
				{/each}
			</div>
		{/if}
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
		color: white !important;
		font-weight: 600;
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
		color: white !important;
		font-weight: 600;
	}

	.contact-section p {
		font-size: 1.2em;
		margin-bottom: 30px;
		opacity: 0.9;
		color: white !important;
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

	/* New styles for publications */
	.publications-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 25px;
		margin-bottom: 60px;
	}

	.publication-card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 8px 25px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.publication-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 35px rgba(0,0,0,0.15);
	}

	.journal-card .publication-header {
		background: linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%);
		color: white;
		padding: 20px;
	}

	.publication-header h3 {
		margin: 0 0 12px 0;
		font-size: 1.2em;
		line-height: 1.4;
		color: white !important;
		font-weight: 600;
	}

	.publication-meta {
		display: flex;
		justify-content: space-between;
		font-size: 0.85em;
		opacity: 0.9;
	}

	.publication-type {
		background: rgba(255,255,255,0.2);
		padding: 3px 8px;
		border-radius: 10px;
	}

	.publication-content {
		padding: 20px;
	}

	.publication-info {
		display: flex;
		gap: 15px;
		align-items: center;
	}

	.file-size, .file-type {
		background: #f0f4ff;
		color: #1e3c72;
		padding: 4px 10px;
		border-radius: 12px;
		font-size: 0.8em;
		font-weight: 500;
	}

	.publication-footer {
		padding: 0 20px 20px;
	}

	.download-button {
		width: 100%;
		background: #1e3c72;
		color: white;
		border: none;
		padding: 12px 20px;
		border-radius: 8px;
		cursor: pointer;
		font-size: 0.95em;
		font-weight: 500;
		transition: background 0.3s ease;
	}

	.download-button:hover:not(:disabled) {
		background: #2a5298;
	}

	.download-button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}

	/* Papers grid styles */
	.papers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 20px;
		margin-bottom: 60px;
	}

	.paper-card {
		background: white;
		border: 1px solid #e0e6ed;
		border-radius: 10px;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);
	}

	.paper-card:hover {
		border-color: #1e3c72;
		box-shadow: 0 4px 15px rgba(30, 60, 114, 0.1);
		transform: translateY(-2px);
	}

	.paper-content {
		display: flex;
		align-items: center;
		gap: 15px;
		flex: 1;
	}

	.paper-icon {
		color: #1e3c72;
		flex-shrink: 0;
	}

	.paper-info {
		flex: 1;
		min-width: 0;
	}

	.paper-info h4 {
		margin: 0 0 8px 0;
		font-size: 0.95em;
		color: #333;
		font-weight: 600;
		line-height: 1.3;
		word-break: break-word;
	}

	.paper-meta {
		display: flex;
		gap: 12px;
		font-size: 0.8em;
		color: #666;
	}

	.file-date {
		color: #888;
	}

	.paper-download-button {
		background: #1e3c72;
		color: white;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2em;
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.paper-download-button:hover:not(:disabled) {
		background: #2a5298;
		transform: scale(1.05);
	}

	.paper-download-button:disabled {
		background: #ccc;
		cursor: not-allowed;
		transform: none;
	}

	@media screen and (max-width: 768px) {
		.resources-header h1 {
			font-size: 2.5em;
		}

		.resources-grid {
			grid-template-columns: 1fr;
		}

		.publications-grid {
			grid-template-columns: 1fr;
		}

		.papers-grid {
			grid-template-columns: 1fr;
		}

		.additional-grid {
			grid-template-columns: 1fr;
		}

		.category-tabs {
			flex-wrap: wrap;
			justify-content: center;
			gap: 8px;
		}

		.category-tab {
			min-width: 140px;
			padding: 10px 20px;
			font-size: 0.95em;
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

		.paper-card {
			padding: 15px;
		}

		.paper-info h4 {
			font-size: 0.9em;
		}

		.publication-card {
			margin-bottom: 20px;
		}
	}
</style>
