import { json } from '@sveltejs/kit';
import { listS3Objects } from '$lib/s3.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		const bucket = 'lithos-ep';
		
		// Fetch journal articles and technical papers in parallel
		const [journalArticles, papers] = await Promise.all([
			listS3Objects(bucket, 'publications/journal/'),
			listS3Objects(bucket, 'technical_papers/')
		]);

		// Sort by last modified date (newest first)
		journalArticles.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
		papers.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

		return json({
			success: true,
			data: {
				journals: journalArticles,
				papers: papers
			}
		});

	} catch (error) {
		console.error('Publications API error:', error);
		
		return json({
			success: false,
			error: error.message || 'Failed to fetch publications'
		}, { status: 500 });
	}
}
