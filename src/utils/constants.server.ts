export const CONTENTFUL_SLUGS = Object.freeze({
    PRIMARY_SITE_CONFIG: process.env.CONTENTFUL_SLUGS_PRIMARY_SITE_CONFIG as string,
    HEADER_SITE_NAVBAR: process.env.CONTENTFUL_SLUGS_HEADER_SITE_NAVBAR as string,
});

export const FAUNA_DB = Object.freeze({
    SECRET: process.env.FAUNA_DB_SECRET as string
})


export const CONTENT_CONFIG = Object.freeze({
    DEFAULT_MAX_POSTS_PER_PAGE:  Math.max(1, process.env.DEFAULT_MAX_POSTS_PER_PAGE as unknown as number),
});

export const SERVER_CONSTANTS = Object.freeze({
    ENVIRONMENT: process.env.ENVIRONMENT as string
})


export const GOOGLE_RECAPTCHA = Object.freeze({
    SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY as string
})


module.exports = {
    CONTENTFUL_SLUGS,
    FAUNA_DB,
    CONTENT_CONFIG,
    SERVER_CONSTANTS,
    GOOGLE_RECAPTCHA,
}