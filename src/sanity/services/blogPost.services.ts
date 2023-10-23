'use server';
import {groq} from "next-sanity";
import {client} from './client';

import {contentBlocksQuery} from "./utils";
import {BlogPost, PostsListIdentifierType} from "~/models";
import { mapSanityList as mapBlogPostSanityList} from "~/sanity/services/blogPost.map";


interface IParams {
    skip?: number | undefined;
    limit?: number | undefined;
    isPaginated: boolean;
    postsListIdentifier: PostsListIdentifierType;
    postsListIdentifierValue?: string | undefined;
}

export const fetchList = async (skip: number = 0, limit: number = 10): Promise<{ items: BlogPost[], total: number }> => {

    const filter = `*[
      _type=='blogPost' 
      && dateTime(now()) >= dateTime(datePublished + 'T00:00:00Z') 
      && publishStatus == 'Published'
  ]`

    const response = await client.fetch(
        groq`
           {
              "total": count(${filter}),
              "items": (
                ${filter}
                | order(dateTime(datePublished + 'T00:00:00Z')  desc)
                [$skip...$limit] {
                   "sysId": _id,
                    "slug" : slug.current,
                    "datePublished": dateTime(datePublished + 'T00:00:00Z'),
                    heading,
                    excerptBlocks[] -> ${contentBlocksQuery},
                    preHeadingExcerptBlocks[] -> ${contentBlocksQuery},
                  }
              )
           }
        `, {
            skip,
            limit: skip + limit,
        })

    return {
        total: response.total as number,
        items: mapBlogPostSanityList(response.items)
    };
}