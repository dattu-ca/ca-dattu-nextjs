'use server';
import { groq } from "next-sanity";
import { client } from './client';
import {contentBlocksQuery, preHeadingContentBlocksQuery} from "./utils";
import { mapSanity as mapHomePageSanity } from './homePage.map';


export const fetch = async () => {
    try {
        const response = await client.fetch(
            groq`*[_type=="homePage"][0]{
                    "sysId": _id,
                    "slug": _type,
                    displayHeading,
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
        return mapHomePageSanity(response);
    } catch (e) {
        console.error(`Cannot find [homePage] content`, e);
    }
}