import {createClient} from 'contentful';
import {EntrySys, OrderFilterPaths} from "contentful";
import {ApolloClient, InMemoryCache} from "@apollo/client";


const space = process.env.CONTENTFUL_SPACE_ID as string;
const environment = process.env.CONTENTFUL_ENVIRONMENT as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string;


const client = createClient({
    space,
    accessToken,
    environment
});

const previewClient = createClient({
    space,
    accessToken: previewAccessToken,
    environment,
});

const apolloClient = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}?access_token=${accessToken}`,
    cache: new InMemoryCache(),
});


export {client, previewClient, apolloClient};