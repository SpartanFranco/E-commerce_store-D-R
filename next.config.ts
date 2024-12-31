import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dummyjson.com',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
		],
	},
};

export default nextConfig;
