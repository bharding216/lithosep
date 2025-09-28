import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { env } from '$env/dynamic/private';

// Initialize S3 client
const s3Client = new S3Client({
	region: env.AWS_REGION || 'us-east-2',
	credentials: {
		accessKeyId: env.AWS_ACCESS_KEY_ID,
		secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
	},
});


/**
 * Extract image key from full S3 URL
 * @param {string} s3Url - Full S3 URL
 * @returns {string} Image key/path
 */
export function extractImageKey(s3Url) {
	try {
		const url = new URL(s3Url);
		// Remove leading slash from pathname and decode URI components
		// AWS S3 keys should be properly decoded for API calls
		return decodeURIComponent(url.pathname.substring(1));
	} catch (error) {
		console.error('Error extracting image key:', error);
		// If URL parsing fails, assume it's already a key
		return s3Url;
	}
}

/**
 * Get bucket name from S3 URL
 * @param {string} s3Url - Full S3 URL
 * @returns {string} Bucket name
 */
export function extractBucketName(s3Url) {
	try {
		const url = new URL(s3Url);
		// Extract bucket name from hostname (format: bucket.s3.region.amazonaws.com)
		return url.hostname.split('.')[0];
	} catch (error) {
		console.error('Error extracting bucket name:', error);
		return 'lithos-ep'; // Default bucket name based on your example
	}
}

/**
 * List objects in an S3 bucket with optional prefix
 * @param {string} bucket - S3 bucket name
 * @param {string} prefix - Optional prefix to filter objects
 * @returns {Promise<Array>} Array of S3 objects
 */
export async function listS3Objects(bucket, prefix = '') {
	try {
		const command = new ListObjectsV2Command({
			Bucket: bucket,
			Prefix: prefix,
		});

		const response = await s3Client.send(command);
		
		// Filter out folders (objects ending with /) and return file objects only
		const objects = (response.Contents || [])
			.filter(obj => !obj.Key.endsWith('/'))
			.map(obj => ({
				key: obj.Key,
				lastModified: obj.LastModified,
				size: obj.Size,
				fileName: obj.Key.split('/').pop(),
				// Extract clean title from filename for journal articles
				title: extractTitleFromFilename(obj.Key.split('/').pop())
			}));

		return objects;
	} catch (error) {
		console.error('Error listing S3 objects:', error);
		throw new Error(`Failed to list S3 objects: ${error.message}`);
	}
}

/**
 * Generate direct S3 URL for public content
 * @param {string} bucket - S3 bucket name
 * @param {string} key - S3 object key (file path)
 * @returns {string} Direct S3 URL
 */
export function generateDirectS3Url(bucket, key) {
	const region = env.AWS_REGION || 'us-east-2';
	return `https://${bucket}.s3.${region}.amazonaws.com/${encodeURIComponent(key)}`;
}

/**
 * Generate direct S3 URLs for multiple objects
 * @param {string} bucket - S3 bucket name
 * @param {string[]} keys - Array of S3 object keys
 * @returns {Object} Object with keys mapped to direct S3 URLs
 */
export function generateMultipleDirectS3Urls(bucket, keys) {
	return keys.reduce((acc, key) => {
		acc[key] = generateDirectS3Url(bucket, key);
		return acc;
	}, {});
}

/**
 * Extract a clean title from filename (mainly for journal articles)
 * @param {string} filename - The filename
 * @returns {string} Clean title
 */
function extractTitleFromFilename(filename) {
	// Remove .pdf extension
	let title = filename.replace(/\.pdf$/i, '');
	
	// For journal articles, clean up common patterns
	if (title.includes(' - ')) {
		// Handle patterns like "Hart's Oil and Gas - Today's Production Challenges - Oct.05"
		const parts = title.split(' - ');
		if (parts.length >= 2) {
			// Take the main title part (usually the second part)
			title = parts.slice(1).join(' - ');
		}
	}
	
	return title;
}
