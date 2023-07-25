import * as contentful from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

const client = contentful.createClient({
    space,
    accessToken,
    environment
});

const previewClient = contentful.createClient({
    space,
    accessToken: previewAccessToken,
    environment
});

export {client, previewClient};