/**
 * Utility functions for managing S3 images throughout the application
 */

// Default S3 bucket configuration
export const S3_CONFIG = {
	bucket: 'lithos-ep',
	region: 'us-east-2',
	baseUrl: 'https://lithos-ep.s3.us-east-2.amazonaws.com'
};

/**
 * Generate S3 URL from image key
 * @param {string} imageKey - The S3 object key (e.g., 'images/130.JPG')
 * @param {string} bucket - Optional bucket name (defaults to configured bucket)
 * @returns {string} Full S3 URL
 */
export function generateS3Url(imageKey, bucket = S3_CONFIG.bucket) {
	if (imageKey.startsWith('http')) {
		return imageKey; // Already a full URL
	}
	
	return `https://${bucket}.s3.${S3_CONFIG.region}.amazonaws.com/${imageKey}`;
}

/**
 * Predefined image collections for different sections of the site
 */
export const IMAGE_COLLECTIONS = {
	// Homepage hero images
	hero: [
		'images/130.JPG',
		'images/131.JPG',
		'images/132.JPG'
	],
	
	// Portfolio project images
	portfolio: {
		oilGas: [
			'images/130.JPG', // Offshore platform
			'images/131.JPG', // Pipeline
			'images/132.JPG'  // Refinery
		],
		waterProcessing: [
			'images/133.JPG',
			'images/134.JPG'
		],
		geothermal: [
			'images/135.JPG',
			'images/136.JPG'
		],
		criticalMinerals: [
			'images/137.JPG',
			'images/138.JPG'
		]
	},
	
	// About page images
	about: [
		'images/130.JPG' // Team/facility image
	],
	
	// Services page images
	services: [
		'images/139.JPG',
		'images/140.JPG'
	]
};

/**
 * Get images for a specific collection
 * @param {string} collectionName - Name of the image collection
 * @param {string} subCollection - Optional sub-collection name
 * @returns {string[]} Array of S3 URLs
 */
export function getImageCollection(collectionName, subCollection = null) {
	const collection = IMAGE_COLLECTIONS[collectionName];
	
	if (!collection) {
		console.warn(`Image collection '${collectionName}' not found`);
		return [];
	}
	
	if (subCollection) {
		const subColl = collection[subCollection];
		if (!subColl) {
			console.warn(`Sub-collection '${subCollection}' not found in '${collectionName}'`);
			return [];
		}
		return subColl.map(key => generateS3Url(key));
	}
	
	if (Array.isArray(collection)) {
		return collection.map(key => generateS3Url(key));
	}
	
	// If collection is an object, return all images from all sub-collections
	return Object.values(collection)
		.flat()
		.map(key => generateS3Url(key));
}

/**
 * Get a random image from a collection
 * @param {string} collectionName - Name of the image collection
 * @param {string} subCollection - Optional sub-collection name
 * @returns {string} Random S3 URL from the collection
 */
export function getRandomImage(collectionName, subCollection = null) {
	const images = getImageCollection(collectionName, subCollection);
	
	if (images.length === 0) {
		return generateS3Url('images/130.JPG'); // Fallback image
	}
	
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
}

/**
 * Preload images for better performance
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise<void>}
 */
export async function preloadImages(imageUrls) {
	const preloadPromises = imageUrls.map(url => {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = resolve;
			img.onerror = reject;
			img.src = url;
		});
	});
	
	try {
		await Promise.all(preloadPromises);
		console.log(`Successfully preloaded ${imageUrls.length} images`);
	} catch (error) {
		console.warn('Some images failed to preload:', error);
	}
}
