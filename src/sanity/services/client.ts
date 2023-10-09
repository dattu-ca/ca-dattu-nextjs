import {ClientConfig, createClient} from "next-sanity";
import {apiVersion, dataset, projectId} from "~/sanity/env";
import {SERVER_CONFIG} from "~/utils/config.server";

const client = createClient({
    projectId,
    dataset,
    apiVersion: apiVersion,
    token: SERVER_CONFIG.SANITY.ACCESS_TOKEN,
    useCdn: false,
} as ClientConfig);


export {
    client
}