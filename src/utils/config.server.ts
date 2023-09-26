const CONTENTFUL_SLUGS = Object.freeze({
    PRIMARY_SITE_CONFIG: process.env.CONTENTFUL_SLUGS_PRIMARY_SITE_CONFIG as string,
    HEADER_SITE_NAVBAR: process.env.CONTENTFUL_SLUGS_HEADER_SITE_NAVBAR as string,
});

const MONGO_DB = Object.freeze({
    USERNAME: process.env.MONGODB_USERNAME as string,
    PASSWORD: process.env.MONGODB_PASSWORD as string,
    DATABASE: process.env.MONGODB_DATABASE as string,
});

const CONTENT_CONFIG = Object.freeze({
    DEFAULT_MAX_POSTS_PER_PAGE: Math.max(1, process.env.DEFAULT_MAX_POSTS_PER_PAGE as unknown as number),
});

const SERVER_CONSTANTS = Object.freeze({
    ENVIRONMENT: process.env.ENVIRONMENT as string
});

const GOOGLE_RECAPTCHA = Object.freeze({
    SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY as string
});

const YOUTUBE_API = Object.freeze({
    KEY: process.env.YOUTUBE_API_KEY
});

const NEXT_AUTH_ALLOWED_IDS = Object.freeze({
    GOOGLE: (process.env.NEXT_AUTH_ALLOWED_GOOGLE_ACCOUNT_IDS as string || '').split(',').map(f => f.trim()),
    GITHUB: (process.env.NEXT_AUTH_ALLOWED_GITHUB_ACCOUNT_IDS as string || '').split(',').map(f => f.trim())
});

const SERVER_CONFIG = Object.freeze({
    CONTENTFUL_SLUGS,
    MONGO_DB,
    YOUTUBE_API,
    CONTENT_CONFIG,
    SERVER_CONSTANTS,
    GOOGLE_RECAPTCHA,
    NEXT_AUTH_ALLOWED_IDS,
});

export {
    SERVER_CONFIG
};

module.exports = {
    SERVER_CONFIG
}