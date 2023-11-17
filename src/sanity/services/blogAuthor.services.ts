'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapBlogAuthorSanity} from './blogAuthor.map';
import {contentBlocksQuery, preHeadingContentBlocksQuery} from "./utils";


export const fetchAllSlugs = async () => {
    const filter = `*[_type=="author"]{ 
                        "slug": slug.current
                    }`
    const response = await client.fetch(
        groq`${filter}`, {
            useCdn: false
        }, {
            next: {
                tags: ['layout', 'page']
            }
        }
    );
    return response.map((r: { slug: string }) => r.slug) as string[];
}
export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="author" && slug.current == $slug][0]{
                "sysId": _id,
                "slug": slug.current,
                displayName,
                avatarInitials,
                "avatarImage":{
                  "sysId": _id,
                  displayName,
                  "caption": avatarImage.caption,
                  "alt": avatarImage.alt,
                  "url": avatarImage.asset -> url
                },
                preHeadingContentBlocks[] -> ${preHeadingContentBlocksQuery},
                contentBlocks[] -> ${contentBlocksQuery}
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
        return mapBlogAuthorSanity(response);
    } catch (e) {
        console.error(`Cannot find [author] for slug=${slug}`, e);
    }


}