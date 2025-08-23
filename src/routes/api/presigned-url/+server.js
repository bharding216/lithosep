import { json } from '@sveltejs/kit';
import { generatePresignedUrl, generateMultiplePresignedUrls, extractImageKey, extractBucketName } from '$lib/s3.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { imageUrl, imageUrls, bucket, key, keys, expiresIn = 3600 } = await request.json();

		// Handle single image URL
		if (imageUrl) {
			const bucketName = bucket || extractBucketName(imageUrl);
			const imageKey = key || extractImageKey(imageUrl);
			
			const presignedUrl = await generatePresignedUrl(bucketName, imageKey, expiresIn);
			
			return json({
				success: true,
				url: presignedUrl,
				originalUrl: imageUrl,
				bucket: bucketName,
				key: imageKey
			});
		}

		// Handle multiple image URLs
		if (imageUrls && Array.isArray(imageUrls)) {
			const bucketName = bucket || extractBucketName(imageUrls[0]);
			const imageKeys = keys || imageUrls.map(url => extractImageKey(url));
			
			const presignedUrls = await generateMultiplePresignedUrls(bucketName, imageKeys, expiresIn);
			
			return json({
				success: true,
				urls: presignedUrls,
				originalUrls: imageUrls,
				bucket: bucketName,
				keys: imageKeys
			});
		}

		// Handle direct bucket/key parameters
		if (bucket && key) {
			const presignedUrl = await generatePresignedUrl(bucket, key, expiresIn);
			
			return json({
				success: true,
				url: presignedUrl,
				bucket,
				key
			});
		}

		// Handle multiple keys with bucket
		if (bucket && keys && Array.isArray(keys)) {
			const presignedUrls = await generateMultiplePresignedUrls(bucket, keys, expiresIn);
			
			return json({
				success: true,
				urls: presignedUrls,
				bucket,
				keys
			});
		}

		return json({
			success: false,
			error: 'Invalid request. Provide either imageUrl/imageUrls or bucket with key/keys.'
		}, { status: 400 });

	} catch (error) {
		console.error('Presigned URL API error:', error);
		
		return json({
			success: false,
			error: error.message || 'Failed to generate presigned URL'
		}, { status: 500 });
	}
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	try {
		const imageUrl = url.searchParams.get('imageUrl');
		const bucket = url.searchParams.get('bucket');
		const key = url.searchParams.get('key');
		const expiresIn = parseInt(url.searchParams.get('expiresIn') || '3600');

		if (imageUrl) {
			const bucketName = bucket || extractBucketName(imageUrl);
			const imageKey = key || extractImageKey(imageUrl);
			
			const presignedUrl = await generatePresignedUrl(bucketName, imageKey, expiresIn);
			
			return json({
				success: true,
				url: presignedUrl,
				originalUrl: imageUrl,
				bucket: bucketName,
				key: imageKey
			});
		}

		if (bucket && key) {
			const presignedUrl = await generatePresignedUrl(bucket, key, expiresIn);
			
			return json({
				success: true,
				url: presignedUrl,
				bucket,
				key
			});
		}

		return json({
			success: false,
			error: 'Invalid request. Provide either imageUrl or bucket with key.'
		}, { status: 400 });

	} catch (error) {
		console.error('Presigned URL API error:', error);
		
		return json({
			success: false,
			error: error.message || 'Failed to generate presigned URL'
		}, { status: 500 });
	}
}
