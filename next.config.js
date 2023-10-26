/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
        swcPlugins: [["next-superjson-plugin", {}]],
    },
    productionBrowserSourceMaps: true,
    async headers() {
        const res = {
            source: "/api/:path*",
            headers: []
        }

        res.headers.push({key: 'Access-Control-Allow-Credentials', value: process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS})
        res.headers.push({key: 'Access-Control-Allow-Origin', value: process.env.ACCESS_CONTROL_ALLOW_ORIGIN}) // replace this your actual origin
        res.headers.push({key: 'Access-Control-Allow-Methods', value: process.env.ACCESS_CONTROL_ALLOW_METHODS})
        res.headers.push({key: 'Access-Control-Allow-Headers', value: process.env.ACCESS_CONTROL_ALLOW_HEADERS})

        return [res]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: `images/${process.env.NEXT_PUBLIC_SANITY_DATASET}/**`,
            }
        ]
    }
};

module.exports = nextConfig