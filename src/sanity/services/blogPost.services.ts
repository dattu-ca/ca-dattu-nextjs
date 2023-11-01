'use server';
import {groq} from "next-sanity";
import {client} from './client';

import {contentBlocksQuery} from "./utils";
import {BlogPost} from "~/models";
import {mapSanityList as mapBlogPostSanityList, mapSanity as mapBlogPostSanity} from "~/sanity/services/blogPost.map";


const availablePostsFilter = `_type=="blogPost"
                    && dateTime(now()) >= dateTime(datePublished + 'T00:00:00Z') 
                    && publishStatus == 'Published' `

export const fetchTotalByReference = async (referenceId: string) => {
    const filter = `*[
      ${availablePostsFilter}
      && references($id)
    ]`
    const response = await client.fetch(
        groq`count(${filter})`, {
            id: referenceId,
            cache: 'no-cache',
            useCdn: false,
            next: {
                revalidate: 0
            }
        }
    );
    return response as number;
}

export const fetchListPaginatedByReference = async (skip: number = 0, limit: number = 10, includeExcerpts: boolean = true, referenceId: string = ''): Promise<{ items: BlogPost[], total: number }> => {
    const filter = `*[
      ${availablePostsFilter}
      ${referenceId ? "&& references($id)" : ''}
  ]`
    const response = await client.fetch(
        groq`
           {
              "total": count(${filter}),
              "items": (
                ${filter}
                | order(dateTime(datePublished + 'T00:00:00Z')  desc)
                ${limit <= 0 ? '' : '[$skip...$limit]'}
                {
                   "sysId": _id,
                    "slug" : slug.current,
                    "datePublished": dateTime(datePublished + 'T00:00:00Z'),
                    heading,
                    ${includeExcerpts
            ? `excerptBlocks[] -> ${contentBlocksQuery},
                           preHeadingExcerptBlocks[] -> ${contentBlocksQuery},`
            : ''
        }
                  }
              )
           }
        `, {
            skip,
            limit: skip + limit,
            id: referenceId,
            cache: 'no-cache',
            useCdn: false,
            next: {
                revalidate: 0
            }
        })

    return {
        total: response.total as number,
        items: mapBlogPostSanityList(response.items)
    };
}

export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[
                    ${availablePostsFilter}
                    && slug.current == $slug
                ][0]{
                "sysId": _id,
                "slug": slug.current,
                heading,
                preHeadingContentBlocks[] -> ${contentBlocksQuery},
                contentBlocks[] -> ${contentBlocksQuery},
                "datePublished": dateTime(datePublished + 'T00:00:00Z'),
                series -> {
                    "sysId": _id,
                    "slug": slug.current,
                    name
                },
                categories[]->{
                    "sysId": _id,
                    "slug": slug.current,
                    name
                },
                tags[]->{
                    "sysId": _id,
                    "slug": slug.current,
                    name
                },
                authors[]->{
                    "sysId": _id,
                    "slug": slug.current,
                    name,
                    avatarInitials,
                    "avatarImage":{
                      "sysId": _id,
                      name,
                      "caption": avatarImage.caption,
                      "alt": avatarImage.alt,
                      "url": avatarImage.asset -> url
                    }
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
        return mapBlogPostSanity(response);
    } catch (e) {
        console.error(`Cannot find [blogPost] for slug=${slug}`, e);
    }


}