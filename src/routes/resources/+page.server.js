import { listS3Objects } from '$lib/s3.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const bucket = 'lithos-ep';
		
		// Fetch journal articles, technical papers, and strategy briefs in parallel
		const [journalArticles, papers, strategyBriefs] = await Promise.all([
			listS3Objects(bucket, 'publications/journal/'),
			listS3Objects(bucket, 'technical_papers/'),
			listS3Objects(bucket, 'strategy_briefs/')
		]);

		// Sort by last modified date (newest first)
		journalArticles.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
		papers.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
		strategyBriefs.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

		return {
			publications: {
				journals: journalArticles,
				papers: papers,
				strategyBriefs: strategyBriefs
			}
		};

	} catch (error) {
		console.error('Error loading publications:', error);
		
		// Return empty data if there's an error, so the page still loads
		return {
			publications: {
				journals: [],
				papers: [],
				strategyBriefs: []
			},
			error: error.message
		};
	}
}
