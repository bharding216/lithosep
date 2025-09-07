import { S3Client, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
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
 * Generate a presigned URL for an S3 object
 * @param {string} bucket - S3 bucket name
 * @param {string} key - S3 object key (file path)
 * @param {number} expiresIn - URL expiration time in seconds (default: 1 hour)
 * @returns {Promise<string>} Presigned URL
 */
export async function generatePresignedUrl(bucket, key, expiresIn = 3600) {
	try {
		const command = new GetObjectCommand({
			Bucket: bucket,
			Key: key,
		});

		const presignedUrl = await getSignedUrl(s3Client, command, {
			expiresIn,
		});

		return presignedUrl;
	} catch (error) {
		console.error('Error generating presigned URL:', error);
		throw new Error(`Failed to generate presigned URL: ${error.message}`);
	}
}

/**
 * Generate presigned URLs for multiple S3 objects
 * @param {string} bucket - S3 bucket name
 * @param {string[]} keys - Array of S3 object keys
 * @param {number} expiresIn - URL expiration time in seconds (default: 1 hour)
 * @returns {Promise<Object>} Object with keys mapped to presigned URLs
 */
export async function generateMultiplePresignedUrls(bucket, keys, expiresIn = 3600) {
	try {
		const urlPromises = keys.map(async (key) => {
			const url = await generatePresignedUrl(bucket, key, expiresIn);
			return { key, url };
		});

		const results = await Promise.all(urlPromises);
		
		// Convert array to object for easier access
		return results.reduce((acc, { key, url }) => {
			acc[key] = url;
			return acc;
		}, {});
	} catch (error) {
		console.error('Error generating multiple presigned URLs:', error);
		throw new Error(`Failed to generate multiple presigned URLs: ${error.message}`);
	}
}

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
