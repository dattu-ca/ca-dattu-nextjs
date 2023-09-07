export const SITE_CONSTANTS = Object.freeze({
    DEFAULT_PAGINATION_MAX_LINKS: Math.max(5, process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_MAX_LINKS as unknown as number),
});

export const CONSTANTS_GOOGLE_RECAPTCHA = Object.freeze({
    SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
}) 


module.exports = {
    SITE_CONSTANTS,
    CONSTANTS_GOOGLE_RECAPTCHA,
}