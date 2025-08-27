import { env } from '$env/dynamic/public';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		siteKey: env.PUBLIC_RECAPTCHA_SITE_KEY || '6LdnWLMrAAAAAG_T0SL1mLj84EHPidkU8uwCe2rX',
		lambdaUrl: env.PUBLIC_LAMBDA_URL || 'https://27vdgchctw7xkfypr3wjzyn2s40dfoga.lambda-url.us-east-2.on.aws/'
	};
}
