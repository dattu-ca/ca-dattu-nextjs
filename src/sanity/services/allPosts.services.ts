'use server';
import { groq } from "next-sanity";
import { client } from './client';
import {contentBlocksQuery, preHeadingContentBlocksQuery} from "./utils";
import { mapSanity as mapAllPostsSanity } from './allPosts.map';


export const fetch = async () => {
    try {
        const response = await client.fetch(
            groq`*[_type=="allPosts"][0]{
                    "sysId": _id,
                    "slug": _type,
                    heading,
                    preHeadingContentBlocks[] -> ${preHeadingContentBlocksQuery},
                    contentBlocks[] -> ${contentBlocksQuery}
                }`,
            {
                useCdn: false
            }, {
                next: {
                    tags: ['layout', 'page']
                }
            }
        )
        return mapAllPostsSanity(response);
    } catch (e) {
        console.error(`Cannot find [allPosts] content`, e);
    }
}