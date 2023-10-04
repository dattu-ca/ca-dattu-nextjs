'use server';
import {client} from "../client";
import { BlogPostsListSkeleton, mapContentful} from '../schema/blogPostsList.schema';
import {BlogPostsList} from "~/models";

const FIELDS = {
    SLUG: 'fields.slug',
    PRE_HEADING_CONTENT_BLOCKS: 'fields.preHeadingContentBlocks',
    HEADING: 'fields.heading',
    CONTENT_BLOCKS: 'fields.contentBlocks',
}

const content_type = 'blogPostsList';

const fetchBySlug = (slug: string) : Promise<BlogPostsList> =>
    client
        .getEntries<BlogPostsListSkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.PRE_HEADING_CONTENT_BLOCKS as 'fields',
                FIELDS.HEADING as 'fields',
                FIELDS.CONTENT_BLOCKS as 'fields',
            ],
            [FIELDS.SLUG]: slug,
            include: 10,
        })
        .then((response) => {
            if (response.items.length === 1) {
                const item = response.items[0];
                const result = mapContentful(item);
                if(result){
                    return result;
                }
                throw new Error(`Found during mapping for [slug]=${slug}`)
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [slug]=${slug}`)
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        });

export{
    fetchBySlug,
}