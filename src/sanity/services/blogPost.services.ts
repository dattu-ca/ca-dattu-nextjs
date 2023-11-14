'use server';
import {QueryParams, groq} from "next-sanity";
import {client} from './client';

import {contentBlocksQuery} from "./utils";
import {BlogPost} from "~/models";
import {mapSanityList as mapBlogPostSanityList, mapSanity as mapBlogPostSanity} from "./blogPost.map";


const availablePostsFilter = `_type=="blogPost"
                    && dateTime(now()) >= dateTime(datePublished + 'T00:00:00Z') 
                    && publishStatus == 'Published' `

export const fetchAllActiveSlugs = async () => {
    const filter = `*[
      ${availablePostsFilter}
    ]{ "slug": slug.current }`
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
export const fetchTotalByReference = async (referenceId: string) => {
    const filter = `*[
      ${availablePostsFilter}
      && references("${referenceId}")
    ]`
    const response = await client.fetch(
        groq`count(${filter})`, {
            useCdn: false,
        }, {
            next: {
                tags: ['layout', 'page']
            }
        }
    );
    return response as number;
}


export const fetchActivePostsWithReference = async (reference: 'Tag' | 'Category') => {
    const filter = `*[
      ${availablePostsFilter}
    ]`
    const response = await client.fetch(
        groq`${filter}{
            ${reference === 'Tag' ? `tags[]->{
                "sysId": _id,
                "slug": slug.current,
                name
            },` : ''}
            ${reference === 'Category' ? `categories[]->{
                "sysId": _id,
                "slug": slug.current,
                name,
            },` : ''}
        }`, {
            useCdn: false,
        }, {
            next: {
                tags: ['layout', 'page']
            }
        }
    );
    if(response){
        return mapBlogPostSanityList(response)    
    }
    return [] as BlogPost[];
    
}

interface IProps {
    skip: number;
    limit: number;
    includeExcerpts?: boolean | undefined;
    referenceIds?: string[] | undefined;
    includeAuthors?: boolean | undefined;
    sortAscendingPublishDate?: boolean | undefined;
}

export const fetchListPaginatedByReferences = async ({
                                                         skip,
                                                         limit,
                                                         includeExcerpts,
                                                         referenceIds,
                                                         includeAuthors,
                                                         sortAscendingPublishDate
                                                     }: IProps): Promise<{ items: BlogPost[], total: number }> => {
    const filter = `*[
      ${availablePostsFilter}
      ${(referenceIds && Array.isArray(referenceIds) && referenceIds.length > 0) ? ` && ( ${referenceIds.map(id => "references('" + id + "')").join("  || ")} )` : ''}
  ]`
    const response = await client.fetch(
        groq`
           {
              "total": count(${filter}),
              "items": (
                ${filter}
                | order(dateTime(datePublished + 'T00:00:00Z')  ${sortAscendingPublishDate ? 'asc' : 'desc'})
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
                    ${
            includeAuthors ? `authors[]->{
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
                                                    }` : ''
        }
                  }
              )
           }
        `, {
            skip,
            limit: skip + limit,
            cache: 'no-cache',
            useCdn: false,
        }, {
            next: {
                tags: ['layout', 'page']
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
                useCdn: false,
            }, {
                next: {
                    tags: ['layout', 'page']
                }
            }
        );
        return mapBlogPostSanity(response);
    } catch (e) {
        console.error(`Cannot find [blogPost] for slug=${slug}`, e);
    }


}