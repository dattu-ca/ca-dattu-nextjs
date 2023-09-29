'use server';
import {client} from "../client";
import { BlogPageSkeleton, mapContentful} from '../schema/blogPage.schema';

const FIELDS = {
    SLUG: 'fields.slug',
    PRE_HEADING_CONTENT_BLOCKS: 'fields.preHeadingContentBlocks',
    HEADING: 'fields.heading',
    CONTENT_BLOCKS: 'fields.contentBlocks',
    BODY: 'fields.body',
    BANNERS: 'fields.banners',
}

const content_type = 'blogPage';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [
                FIELDS.PRE_HEADING_CONTENT_BLOCKS as 'fields',
                FIELDS.HEADING as 'fields',
                FIELDS.CONTENT_BLOCKS as 'fields',
                FIELDS.BODY as 'fields',
                FIELDS.BANNERS as 'fields',
            ],
            [FIELDS.SLUG]: slug,
            include: 10,
        })
        .then((response) => {
            if (response.items.length === 1) {
                const item = response.items[0];
                return mapContentful(item);
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [slug]=${slug}`)
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        });

export{
    fetchBySlug,
}