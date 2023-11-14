'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapMetaCategorySanity, mapSanityList as mapMetaCategoryListSanity} from './metaCategory.map';
import {contentBlocksQuery} from "./utils";


export const fetchAllSlugs = async () => {
    const filter = `*[_type=="category"]{ "slug": slug.current }`
    const response = await client.fetch(
        groq`${filter}`, {
            useCdn: false,
        }, {
            next: {
                tags: ['layout', 'page']
            }
        }
    );
    return response.map((r: { slug: string }) => r.slug) as string[];
}

export const fetchAllCategories = async () => {
    const filter = `*[_type=="category"]{ 
        "sysId": _id,
        "slug": slug.current,
        name,
        parentCategory -> {
            "sysId": _id,
            "slug": slug.current,
            name
        }
     }`
    const response = await client.fetch(
        groq`${filter}`, {
            useCdn: false,
        }, {
            next: {
                tags: ['layout', 'page']
            }
        }
    );
    return mapMetaCategoryListSanity(response);
}
export const fetchListByReference = async (sysId: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="category" && references($id)]{
                "sysId": _id,
                "slug": slug.current,
                name,
              }`,
            {
                id: sysId,
                useCdn: false,
            }, {
                next: {
                    tags: ['layout', 'page']
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
                name,
                parentCategory -> {
                    "sysId": _id,
                    "slug": slug.current,
                    name
                },
                ${includeContent
                ? `preHeadingContentBlocks[] -> ${contentBlocksQuery}, contentBlocks[] -> ${contentBlocksQuery},`
                : ''
            }
              }`,
            {
                slug: slug,
                useCdn: false,
            }, {
                next: {
                    tags: ['layout', 'page']
                }
            }
        )
        return mapMetaCategorySanity(response);
    } catch (e) {
        console.error(`Cannot find [category] for slug=${slug}`, e);
    }
}