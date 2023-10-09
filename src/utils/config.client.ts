const SITE_CONSTANTS = Object.freeze({
    DEFAULT_PAGINATION_MAX_LINKS: Math.max(9, process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_MAX_LINKS as unknown as number),
});

const GOOGLE_RECAPTCHA = Object.freeze({
    SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
})


const SANITY = Object.freeze({
    API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string || '2023-10-04',
    DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
})



const CLIENT_CONFIG = Object.freeze({
    SITE_CONSTANTS,
    GOOGLE_RECAPTCHA,
    SANITY
});

export {
    CLIENT_CONFIG,
}


module.exports = {
    CLIENT_CONFIG
}