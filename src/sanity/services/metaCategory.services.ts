'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapMetaCategorySanity, mapSanityList as mapMetaCategoryListSanity} from './metaCategory.map';
import {contentBlocksQuery} from "./utils";



export const fetchAllSlugs = async () => {
    const filter = `*[_type=="category"]{ "slug": slug.current, "lastFetchedOn": ${Date.now()}, }`
    const response = await client.fetch(
        groq`${filter}`, {
            cache: 'no-cache',
            useCdn: false,
            next: {
                revalidate: 0
            }
        }
    );
    return response.map((r: { slug: string }) => r.slug) as string[];
}
export const fetchListByReference = async (sysId: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="category" && references($id)]{
                "sysId": _id,
                "slug": slug.current,
                "lastFetchedOn": ${Date.now()},
                name,
              }`,
            {
                id: sysId,
                cache: 'no-cache',
                useCdn: false,
                next: {
                    revalidate: 0
                }
            }
        )
        return mapMetaCategoryListSanity(response);
    } catch (e) {
        console.error(`Cannot find [category] for referenceId=${sysId}`, e);
    }
}

export const fetchBySlug = async (slug: string, includeContent = false) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="category" && slug.current == $slug][0]{
                "sysId": _id,
                "slug": slug.current,
                "lastFetchedOn": ${Date.now()},
                name,
                parentCategory -> {
                    "sysId": _id,
                    "slug": slug.current,
                    name
                },
                ${ includeContent
                    ? `preHeadingContentBlocks[] -> ${contentBlocksQuery}, contentBlocks[] -> ${contentBlocksQuery},`
                    : ''
                }
              }`,
            {
                slug: slug,
                cache: 'no-cache',
                useCdn: false,
                next: {
                    revalidate: 0
                }
            }
        )
        return mapMetaCategorySanity(response);
    } catch (e) {
        console.error(`Cannot find [category] for slug=${slug}`, e);
    }
}