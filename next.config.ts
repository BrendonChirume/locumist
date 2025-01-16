import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oxbowui.com',
            }, {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
