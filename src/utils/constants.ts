export const CONTENTFUL_SLUGS = Object.freeze({
    PRIMARY_SITE_CONFIG: process.env.NEXT_PUBLIC_CONTENTFUL_SLUGS_PRIMARY_SITE_CONFIG as string,
    HEADER_SITE_NAVBAR: process.env.NEXT_PUBLIC_CONTENTFUL_SLUGS_HEADER_SITE_NAVBAR as string,
});

export const FAUNA_DB = Object.freeze({
    SECRET: process.env.FAUNA_DB_SECRET
})


export const SITE_CONSTANTS = Object.freeze({
    DEFAULT_MAX_POSTS_PER_PAGE:  Math.max(1, process.env.NEXT_PUBLIC_DEFAULT_MAX_POSTS_PER_PAGE as unknown as number),
    DEFAULT_PAGINATION_MAX_LINKS: Math.max(5, process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_MAX_LINKS as unknown as number),
});

export const CONSTANTS = Object.freeze({
    ENVIRONMENT: process.env.ENVIRONMENT
})

module.exports = {
    CONTENTFUL_SLUGS,
    FAUNA_DB,
    SITE_CONSTANTS,
    CONSTANTS,
}