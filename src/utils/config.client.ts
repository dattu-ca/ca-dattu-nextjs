const SITE_CONSTANTS = Object.freeze({
    DEFAULT_PAGINATION_MAX_LINKS: Math.max(9, process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_MAX_LINKS as unknown as number),
});

const GOOGLE_RECAPTCHA = Object.freeze({
    SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
})
const CLIENT_CONFIG = Object.freeze({
    SITE_CONSTANTS,
    GOOGLE_RECAPTCHA,
});

export {
    CLIENT_CONFIG
}


module.exports = {
    CLIENT_CONFIG
}