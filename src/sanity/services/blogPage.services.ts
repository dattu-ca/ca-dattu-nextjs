'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapBlogPageSanity} from './blogPage.map';
import {contentBlocksQuery} from "./utils";


export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="blogPage" && slug.current == $slug][0]{
                    "sysId": _id,
                    "slug": slug.current,
                    heading,
                    preHeadingContentBlocks[] -> ${contentBlocksQuery},
                    contentBlocks[] -> ${contentBlocksQuery},
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
        return mapBlogPageSanity(response);
    } catch (e) {
        console.error(`Cannot find [blogPage] for slug=${slug}`, e);
    }


}