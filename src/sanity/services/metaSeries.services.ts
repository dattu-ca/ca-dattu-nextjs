'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapMetaSeriesSanity} from './metaSeries.map';
import {contentBlocksQuery} from "./utils";


export const fetchAllSlugs = async () => {
    const filter = `*[_type=="series"]{ "slug": slug.current }`
    const response = await client.fetch(
        groq`${filter}`, {
            useCdn: false,
        }, {
            next: {
                revalidate: 60
            }
        }
    );
    return response.map((r: { slug: string }) => r.slug) as string[];
}

export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="series" && slug.current == $slug][0]{
                "sysId": _id,
                "slug": slug.current,
                name,
                preHeadingContentBlocks[] -> ${contentBlocksQuery},
                contentBlocks[] -> ${contentBlocksQuery},
              }`,
            {
                slug: slug,
                useCdn: false,
            }, {
                next: {
                    revalidate: 60
                }
            }
        )
        return mapMetaSeriesSanity(response);
    } catch (e) {
        console.error(`Cannot find [series] for slug=${slug}`, e);
    }


}