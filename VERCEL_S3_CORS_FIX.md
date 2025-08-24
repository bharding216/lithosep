# S3 CORS Configuration for Vercel Deployment

## Problem
Images load locally but fail in production on Vercel due to CORS (Cross-Origin Resource Sharing) restrictions.

## Solution: Configure S3 Bucket CORS

### Step 1: Access S3 Bucket Settings
1. Go to AWS S3 Console
2. Select your bucket: `lithos-ep`
3. Go to **Permissions** tab
4. Scroll down to **Cross-origin resource sharing (CORS)**

### Step 2: Add CORS Configuration
Replace the existing CORS configuration with:

```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "https://*.vercel.app",
            "https://your-domain.com",
            "http://localhost:*",
            "https://localhost:*"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3600
    }
]
```

**Replace `https://your-domain.com` with your actual production domain.**

### Step 3: Alternative - More Permissive (for testing)
If you need a quick fix for testing, you can use:

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "HEAD"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": ["ETag"],
        "MaxAgeSeconds": 3600
    }
]
```

**⚠️ Warning: Using `"*"` for AllowedOrigins is less secure. Use specific domains in production.**

### Step 4: Verify Environment Variables in Vercel
Make sure these environment variables are set in your Vercel dashboard:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:

```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=us-east-2
```

### Step 5: Check S3 Bucket Region
I notice your error shows `us-east-1` but your bucket might be in `us-east-2`. Verify:

1. Check your bucket region in S3 console
2. Update the region in your environment variables if needed
3. Update the region in `src/lib/s3.js` if hardcoded

### Step 6: Test the Fix
1. Deploy your changes to Vercel
2. Check browser developer tools for any remaining CORS errors
3. Verify images load correctly

## Additional Debugging Steps

### Check Network Tab
1. Open browser DevTools → Network tab
2. Look for failed image requests
3. Check response headers for CORS-related errors

### Verify Presigned URL Generation
Add this to your S3Image component for debugging:

```javascript
console.log('Generated presigned URL:', presignedUrl);
```

### Test Direct S3 Access
Try accessing your S3 bucket directly:
`https://lithos-ep.s3.us-east-2.amazonaws.com/images/130.JPG`

If this fails, check your bucket's public access settings.

## Common Issues

1. **Wrong Region**: Ensure AWS_REGION matches your bucket's actual region
2. **Missing CORS**: S3 bucket needs CORS configuration for cross-origin requests
3. **Bucket Policy**: Ensure your bucket allows GetObject operations
4. **Environment Variables**: Verify all AWS credentials are set in Vercel

## Security Best Practices

1. Use specific domains in CORS AllowedOrigins
2. Limit IAM permissions to only s3:GetObject
3. Set appropriate expiration times for presigned URLs
4. Consider using CloudFront for better performance and security
