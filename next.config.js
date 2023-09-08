/** @type {import('next').NextConfig} */
const {createCollections} = require('./next.startup');
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
        swcPlugins: [["next-superjson-plugin", {}]],
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'images.ctfassets.net',
    //             port: '',
    //             pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
    //         }
    //     ]
    // }
};

module.exports = async () => {
    await createCollections();
    return nextConfig
}