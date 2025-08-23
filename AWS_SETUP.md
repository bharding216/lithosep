# AWS S3 Configuration Setup

## Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# AWS Configuration for S3 Presigned URLs
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=us-east-2

# S3 Configuration
S3_BUCKET_NAME=lithos-ep
S3_PRESIGNED_URL_EXPIRES=3600

# Optional: Custom S3 endpoint (for testing with LocalStack, etc.)
# AWS_ENDPOINT_URL=http://localhost:4566
```

## AWS IAM Permissions

Your AWS user/role needs the following S3 permissions:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": "arn:aws:s3:::lithos-ep/*"
        }
    ]
}
```

## Usage Examples

### Using the S3Image Component

```svelte
<script>
    import S3Image from '$lib/components/S3Image.svelte';
</script>

<!-- Using full S3 URL -->
<S3Image 
    src="https://lithos-ep.s3.us-east-2.amazonaws.com/images/130.JPG"
    alt="Project image"
    className="portfolio-image"
/>

<!-- Using just the image key -->
<S3Image 
    src="images/130.JPG"
    bucket="lithos-ep"
    alt="Project image"
    width="400"
    height="300"
/>
```

### Using the API Endpoint Directly

```javascript
// Single image
const response = await fetch('/api/presigned-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        imageUrl: 'https://lithos-ep.s3.us-east-2.amazonaws.com/images/130.JPG'
    })
});

// Multiple images
const response = await fetch('/api/presigned-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        bucket: 'lithos-ep',
        keys: ['images/130.JPG', 'images/131.JPG', 'images/132.JPG']
    })
});
```

## Security Notes

1. **Never commit your `.env` file** - it contains sensitive AWS credentials
2. **Use IAM roles in production** - avoid hardcoded credentials when possible
3. **Limit S3 permissions** - only grant `s3:GetObject` permission for the specific bucket
4. **Set appropriate expiration times** - presigned URLs expire after the specified time
5. **Consider CORS settings** - ensure your S3 bucket allows requests from your domain

## Deployment Considerations

### Vercel
Add environment variables in your Vercel dashboard under Settings > Environment Variables.

### Other Platforms
Ensure your deployment platform supports environment variables and add the AWS credentials there.

## Troubleshooting

1. **"Access Denied" errors**: Check IAM permissions and bucket policies
2. **"Invalid credentials" errors**: Verify AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
3. **"Region not found" errors**: Ensure AWS_REGION matches your bucket's region
4. **CORS errors**: Configure CORS settings on your S3 bucket if needed
