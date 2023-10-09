import {apiVersion, dataset, projectId} from "~/sanity/env";
import {ClientConfig, createClient, groq} from "next-sanity";

export const getProjects= async () =>{
    const client = createClient({
        projectId,
        dataset,
        apiVersion: apiVersion,
    } as ClientConfig);
    
    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
    
}