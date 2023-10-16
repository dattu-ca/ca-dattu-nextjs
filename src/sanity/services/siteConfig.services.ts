'use server';
import { groq } from "next-sanity";
import { client } from './client';
import { mapSanity } from "./siteConfig.map";

export const fetch = async () => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteConfig"][0]{
                "sysId": _id,
                "slug": _type,
                siteTitleTemplate,
                siteTitleDefault,
                siteDescription
            }`,
            {
                cache: 'no-cache',
                next: {
                    revalidate: 0
                }
            }
        )
        return mapSanity(response);
    } catch (e) {
        console.error(`Cannot find [siteConfig] content`, e);
    }


}