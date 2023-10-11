
const CONSTANTS = Object.freeze({
    DEFAULT_SITE_NAME: process.env.DEFAULT_SITE_NAME as string
})

const CONTENTFUL_SLUGS = Object.freeze({
    HEADER_SITE_NAVBAR: process.env.CONTENTFUL_SLUGS_HEADER_SITE_NAVBAR as string,
    HOME_PAGE: process.env.CONTENTFUL_SLUGS_HOME_PAGE as string,
    ARTICLES_PAGE: process.env.CONTENTFUL_SLUGS_ARTICLES_PAGE as string,
});

const CONTENT_SLUGS = Object.freeze({
    
})

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

const GOOGLE_AUTH = Object.freeze({
    CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID as string,
    CLIENT_SECRET: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
})

const GITHUB_AUTH = Object.freeze({
    ID: process.env.GITHUB_ID as string,
    SECRET: process.env.GITHUB_SECRET as string,
})

const SENDGRID = Object.freeze({
    API_KEY: process.env.SENDGRID_API_KEY as string,
    SITE_EMAIL: process.env.SENDGRID_SITE_EMAIL as string,
})

const CORS = Object.freeze({
    ALLOW_CORS: (process.env.ALLOW_CORS as string || '').split(";")
})

const SANITY = Object.freeze({
    ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN_CRUD as string
})

const SERVER_CONFIG = Object.freeze({
    CONSTANTS,
    CONTENT_SLUGS,
    CONTENTFUL_SLUGS,
    MONGO_DB,
    YOUTUBE_API,
    CONTENT_CONFIG,
    SERVER_CONSTANTS,
    GOOGLE_RECAPTCHA,
    NEXT_AUTH_ALLOWED_IDS,
    SENDGRID,
    CORS,
    GOOGLE_AUTH,
    GITHUB_AUTH,
    SANITY
});

export {
    SERVER_CONFIG
};

module.exports = {
    SERVER_CONFIG
}