'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapBlogPageSanity} from './blogPage.map';
import {contentBlocksQuery} from "./utils";
import {revalidate} from "~/app/(website)/page/[slug]/page";

export const fetchAllSlugs = async () => {
    const filter = `*[_type=="blogPage"]{ 
                                "slug": slug.current
                           }`
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
            groq`*[_type=="blogPage" && slug.current == $slug][0]{
                    "sysId": _id,
                    "slug": slug.current,
                    heading,
                    preHeadingContentBlocks[] -> ${contentBlocksQuery},
                    contentBlocks[] -> ${contentBlocksQuery}
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
        console.log("response", response.heading)
        return mapBlogPageSanity(response);
    } catch (e) {
        console.error(`Cannot find [blogPage] for slug=${slug}`, e);
    }


}