/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "user-images.githubusercontent.com",
            "github.com",
            "cdn.icon-icons.com",
            "yt3.googleusercontent.com",
            "upload.wikimedia.org",
            "github-production-user-asset-6210df.s3.amazonaws.com",
        ],
    },
};

export default nextConfig;
