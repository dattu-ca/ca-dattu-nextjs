import {ClientConfig, createClient} from "next-sanity";
import {apiVersion, dataset, projectId} from "~/sanity/env";

const client = createClient({
    projectId,
    dataset,
    apiVersion: apiVersion,
    token: process.env.SANITY_ACCESS_TOKEN,
    useCdn: false,
} as ClientConfig);


export {
    client
}