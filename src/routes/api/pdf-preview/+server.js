import { json } from '@sveltejs/kit';
import { generateDirectS3Url } from '$lib/s3.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { bucket, key, expiresIn = 3600 } = await request.json();

		if (!bucket || !key) {
			return json({
				success: false,
				error: 'Bucket and key are required'
			}, { status: 400 });
		}

		// Generate direct S3 URL for PDF preview
		const directUrl = generateDirectS3Url(bucket, key);
		
		// Use direct URL for inline viewing
		const previewUrl = directUrl;
		
		return json({
			success: true,
			url: previewUrl,
			bucket,
			key
		});

	} catch (error) {
		console.error('PDF Preview API error:', error);
		
		return json({
			success: false,
			error: error.message || 'Failed to generate PDF preview URL'
		}, { status: 500 });
	}
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	try {
		const bucket = url.searchParams.get('bucket');
		const key = url.searchParams.get('key');
		const expiresIn = parseInt(url.searchParams.get('expiresIn') || '3600');

		if (!bucket || !key) {
			return json({
				success: false,
				error: 'Bucket and key are required'
			}, { status: 400 });
		}

		// Generate direct S3 URL for PDF preview
		const directUrl = generateDirectS3Url(bucket, key);
		
		// Use direct URL for inline viewing
		const previewUrl = directUrl;
		
		return json({
			success: true,
			url: previewUrl,
			bucket,
			key
		});

	} catch (error) {
		console.error('PDF Preview API error:', error);
		
		return json({
			success: false,
			error: error.message || 'Failed to generate PDF preview URL'
		}, { status: 500 });
	}
}
