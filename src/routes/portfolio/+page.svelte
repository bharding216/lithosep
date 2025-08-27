<svelte:head>
	<title>Portfolio - Our Projects</title>
	<meta name="description" content="Explore our consulting projects across Oil & Gas, CCUS, Geothermal, and Critical Minerals sectors" />
</svelte:head>

<script>
	import S3Image from '$lib/components/S3Image.svelte';
	let selectedSector = 'oil-gas';
	
	let sectors = {
		'oil-gas': {
			name: 'Oil & Gas',
			description: 'Comprehensive solutions for upstream, midstream, and downstream operations',
			projects: [
				{ 
					id: 'asset-management', 
					name: 'Asset Management',
					description: 'Our strategy is to close the GAP between the current production and the potential performance given by the operational and technical limits.',
					location: 'Gulf of Mexico',
					year: '2023',
					scope: 'Asset optimization, production enhancement, operational excellence',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20170613_125952.jpg'
				},
				{ 
					id: 'horizontal-wells', 
					name: 'Horizontal Wells',
					description: 'Reservoir & Production Performance from Multi-stage Fractured Horizontal Well',
					location: 'Texas',
					year: '2023',
					scope: 'Multi-stage fracturing, production optimization, reservoir performance',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180710_134510.jpg'
				},
				{ 
					id: 'resource-assessment', 
					name: 'Resource Assessment / Reserves Evaluation',
					description: 'Petroleum Reserves and Financial Evaluation. Strategy for Development, Drainage Area, EUR and Recovery Factors',
					location: 'Louisiana',
					year: '2022',
					scope: 'Reserves evaluation, financial modeling, development strategy',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180328_094501.jpg'
				},
				{ 
					id: 'reservoir-completions', 
					name: 'Reservoir Completions',
					description: 'Specialized reservoir completion design and optimization for enhanced production performance',
					location: 'North Dakota',
					year: '2022',
					scope: 'Completion design, perforation optimization, production enhancement',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20171014_180648.jpg'
				},
				{ 
					id: 'mature-assets', 
					name: 'Mature Assets',
					description: 'Optimization and rejuvenation strategies for mature oil and gas assets to extend field life and enhance recovery',
					location: 'West Texas',
					year: '2021',
					scope: 'Asset revitalization, enhanced recovery, field optimization',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/SAM_3027.JPG'
				},
				{ 
					id: 'conventional-developments', 
					name: 'Conventional Developments',
					description: 'Traditional oil and gas development projects with proven reservoir engineering and production techniques',
					location: 'Various',
					year: '2023',
					scope: 'Conventional drilling, reservoir management, production optimization',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20170613_125952.jpg'
				},
				{ 
					id: 'offshore', 
					name: 'Offshore',
					description: 'Comprehensive offshore oil and gas development solutions including platform design and subsea systems',
					location: 'Various Offshore Locations',
					year: '2023',
					scope: 'Offshore platform design, subsea engineering, marine operations',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180710_134510.jpg'
				},
				{ 
					id: 'unconventional-reservoirs', 
					name: 'Unconventional Reservoirs',
					description: 'Specialized solutions for unconventional reservoir development including shale gas, tight oil, and coalbed methane',
					location: 'Various',
					year: '2023',
					scope: 'Unconventional drilling, hydraulic fracturing, reservoir characterization',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20171014_180648.jpg'
				}
			]
		},
		'water-processing': {
			name: 'CCUS',
			description: 'Advanced water treatment solutions for industrial and municipal applications',
			projects: [
				{ 
					id: 'municipal-treatment', 
					name: 'Municipal Water Treatment Plant',
					description: 'Design and implementation of advanced treatment systems',
					location: 'Arizona',
					year: '2023',
					scope: 'System design, process optimization, regulatory compliance',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20180716_132122.jpg'
				},
				{ 
					id: 'industrial-processing', 
					name: 'Industrial CCUS Facility',
					description: 'Advanced water treatment for industrial applications',
					location: 'California',
					year: '2022',
					scope: 'Treatment system design, automation, environmental compliance',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190130_104600.jpg'
				}
			]
		},
		'geothermal': {
			name: 'Geothermal',
			description: 'Sustainable energy solutions leveraging geothermal resources',
			projects: [
				{ 
					id: 'geothermal-plant', 
					name: 'Geothermal Power Plant',
					description: 'Renewable energy generation facility development',
					location: 'Nevada',
					year: '2023',
					scope: 'Resource assessment, plant design, environmental impact',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/DSCF0454.JPG'
				},
				{ 
					id: 'geothermal-heating', 
					name: 'Direct Use Geothermal System',
					description: 'Industrial heating application using geothermal energy',
					location: 'Wyoming',
					year: '2022',
					scope: 'System design, installation, performance optimization',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/DSCF0496.JPG'
				}
			]
		},
		'critical-minerals': {
			name: 'Critical Minerals',
			description: 'Strategic consulting for lithium and critical minerals processing',
			projects: [
				{ 
					id: 'lithium-extraction', 
					name: 'Lithium Extraction Facility',
					description: 'Advanced extraction and processing operations',
					location: 'Chile',
					year: '2023',
					scope: 'Process design, environmental assessment, feasibility studies',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/Picture88.jpg'
				},
				{ 
					id: 'mineral-processing', 
					name: 'Critical Minerals Processing Plant',
					description: 'Comprehensive mineral processing and purification facility',
					location: 'Australia',
					year: '2022',
					scope: 'Plant design, process optimization, automation systems',
					image: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/20190327_122324.jpg'
				}
			]
		}
	};
	let expandedProject = null;

	function toggleProject(projectId) {
		expandedProject = expandedProject === projectId ? null : projectId;
	}
</script>

<div class="portfolio-container">
	<div class="portfolio-header">
		<h1>Our Portfolio</h1>
		<p>Explore our consulting projects across multiple industry sectors</p>
	</div>

	<div class="sector-tabs">
		{#each Object.entries(sectors) as [key, sector]}
			<button 
				class="sector-tab {selectedSector === key ? 'active' : ''}"
				on:click={() => selectedSector = key}
			>
				{sector.name}
			</button>
		{/each}
	</div>

	<div class="sector-content">
		<div class="sector-info">
			<h2>{sectors[selectedSector].name}</h2>
			<p class="sector-description">{sectors[selectedSector].description}</p>
		</div>

		<div class="projects-grid">
			{#each sectors[selectedSector].projects as project}
				<div class="project-card">
					{#if project.image}
						<div class="project-image">
							<S3Image 
								src={project.image}
								alt={project.name}
								className="portfolio-project-image"
								aspectRatio="16/10"
								objectFit="cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
							/>
						</div>
					{/if}
					<div class="project-content">
						<button class="project-header" on:click={() => toggleProject(project.id)}>
							<h3>{project.name}</h3>
							<span class="expand-icon {expandedProject === project.id ? 'expanded' : ''}">▼</span>
						</button>
						<div class="project-meta">
							<span class="project-location">{project.location}</span>
							<span class="project-year">{project.year}</span>
						</div>
						<p class="project-description">{project.description}</p>
					
						{#if expandedProject === project.id}
							<div class="project-details">
								<h4>Project Scope</h4>
								<p>{project.scope}</p>
								{#if project.year !== 'Future'}
									<div class="project-status">
										<span class="status-badge completed">Completed</span>
									</div>
								{:else}
									<div class="project-status">
										<span class="status-badge future">Future Project</span>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.portfolio-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.portfolio-header {
		text-align: center;
		margin-bottom: 50px;
	}

	.portfolio-header h1 {
		font-size: 3em;
		color: #1e3c72;
		margin-bottom: 15px;
	}

	.portfolio-header p {
		font-size: 1.2em;
		color: #666;
	}

	.sector-tabs {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-bottom: 40px;
		flex-wrap: wrap;
	}

	.sector-tab {
		padding: 12px 24px;
		border: 2px solid #1e3c72;
		background: white;
		color: #1e3c72;
		border-radius: 25px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.sector-tab:hover {
		background: #f0f4ff;
	}

	.sector-tab.active {
		background: #1e3c72;
		color: white;
	}

	.sector-content {
		margin-top: 40px;
	}

	.sector-info {
		text-align: center;
		margin-bottom: 40px;
	}

	.sector-info h2 {
		font-size: 2.5em;
		color: #1e3c72;
		margin-bottom: 15px;
	}

	.sector-description {
		font-size: 1.2em;
		color: #666;
		max-width: 600px;
		margin: 0 auto;
	}

	.projects-grid {
		display: grid;
		gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}

	.project-card {
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		transform: translateY(-5px);
	}

	.project-image {
		width: 100%;
		overflow: hidden;
	}

	:global(.portfolio-project-image) {
		width: 100%;
		transition: transform 0.3s ease;
	}

	.project-card:hover :global(.portfolio-project-image) {
		transform: scale(1.05);
	}

	.project-content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.project-header {
		padding: 25px;
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: none;
		width: 100%;
		text-align: left;
	}

	.project-header h3 {
		margin: 0;
		font-size: 1.3em;
		color: white;
	}

	.expand-icon {
		transition: transform 0.3s ease;
		font-size: 1.2em;
	}

	.expand-icon.expanded {
		transform: rotate(180deg);
	}

	.project-meta {
		padding: 15px 25px 0;
		display: flex;
		justify-content: space-between;
		font-size: 0.9em;
		color: #666;
	}

	.project-location {
		font-weight: 500;
	}

	.project-year {
		background: #f0f4ff;
		padding: 4px 8px;
		border-radius: 12px;
		color: #1e3c72;
	}

	.project-description {
		padding: 15px 25px;
		color: #333;
		line-height: 1.6;
	}

	.project-details {
		padding: 0 25px 25px;
		border-top: 1px solid #eee;
		margin-top: 15px;
		padding-top: 20px;
	}

	.project-details h4 {
		color: #1e3c72;
		margin-bottom: 10px;
	}

	.project-details p {
		color: #666;
		line-height: 1.6;
		margin-bottom: 15px;
	}

	.project-status {
		display: flex;
		justify-content: flex-end;
	}

	.status-badge {
		padding: 6px 12px;
		border-radius: 15px;
		font-size: 0.8em;
		font-weight: 500;
	}

	.status-badge.completed {
		background: #d4edda;
		color: #155724;
	}

	.status-badge.future {
		background: #fff3cd;
		color: #856404;
	}

	@media screen and (max-width: 768px) {
		.portfolio-header h1 {
			font-size: 2.5em;
		}

		.sector-info h2 {
			font-size: 2em;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.sector-tabs {
			flex-direction: column;
			align-items: center;
		}

		.sector-tab {
			width: 200px;
		}
	}
</style>