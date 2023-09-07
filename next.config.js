/** @type {import('next').NextConfig} */
const  {createCollections} =  require('./next.startup');
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
        swcPlugins: [["next-superjson-plugin", {}]],
    },
};

module.exports = async () => {
    await createCollections();
    return nextConfig
}