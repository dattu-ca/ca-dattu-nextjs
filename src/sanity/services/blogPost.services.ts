'use server';
import { groq } from "next-sanity";
import { client } from './client';

import { contentBlocksQuery } from "./utils";
import { BlogPost } from "~/models";



export const fetchListCount = async () => {
    const response = await client.fetch(
        groq`
            count(*[
                _type=='blogPost' 
                && dateTime(now()) >= dateTime(datePublished + 'T00:00:00Z') 
                && publishStatus == 'Published'
            ])
        `, {
        cache: 'no-cache',
        next: {
            revalite: 1
        }
    })
    return response as number;
}


export const fetchListPaginated = async (skip: number = 0, limit: number = 10): Promise<{ items: BlogPost[], total: number }> => {

    const response = await client.fetch(
        groq`
           *[
                _type=='blogPost' 
                && dateTime(now()) >= dateTime(datePublished + 'T00:00:00Z') 
                && publishStatus == 'Published'
            ]
            | order(dateTime(datePublished + 'T00:00:00Z')  desc)
            [$skip...$limit]
        `, {
        skip,
        limit,
        cache: 'no-cache',
        next: {
            revalite: 1
        }
    })

    return response;
    
    // try {
    //     const response = await client.fetch(
    //         groq`*[_type=="blogPost" && slug.current == $slug][0]{
    //     "sysId": _id,
    //     "slug": slug.current,                
    //     heading,
    //     preHeadingContentBlocks[] -> ${contentBlocksQuery},
    //     contentBlocks[] -> ${contentBlocksQuery},
    //   }`,
    //         {
    //             slug: slug,
    //             cache: 'no-cache',
    //             next: {
    //                 revalidate: 1
    //             }
    //         }
    //     )

    //     console.log(response);

    //     return []

    // } catch (e) {
    //     console.error(`Cannot find [blogPage] for slug=${slug}`, e);
    // }


}