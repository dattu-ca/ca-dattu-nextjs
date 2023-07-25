import * as contentful from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID as string;
const environment = process.env.CONTENTFUL_ENVIRONMENT as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string;

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