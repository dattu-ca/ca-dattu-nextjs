import {client} from "../client";
import {BlogPostSkeleton, mapContentful} from '../schema/blogPost.schema'


const CONTENTFUL_BLOG_POST_FIELDS = {
    HEADING: 'fields.heading',
    BODY: 'fields.body',
    SHORT_BODY: 'fields.shortBody',
    SLUG: 'fields.slug',
    BANNERS: 'fields.banners',
    SIDEBARS: 'fields.sidebars',
}

const content_type = 'blogPost';


const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: [
                CONTENTFUL_BLOG_POST_FIELDS.HEADING as 'fields',
                CONTENTFUL_BLOG_POST_FIELDS.BODY as 'fields',
                CONTENTFUL_BLOG_POST_FIELDS.BANNERS as 'fields',
                CONTENTFUL_BLOG_POST_FIELDS.SIDEBARS as 'fields'
            ],
            [CONTENTFUL_BLOG_POST_FIELDS.SLUG]: slug,
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


const fetchListPaginated = (skip: number = 0, limit: number = 10) => {
    return client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: [
                CONTENTFUL_BLOG_POST_FIELDS.SLUG as 'fields',
                CONTENTFUL_BLOG_POST_FIELDS.HEADING as 'fields',
                // CONTENTFUL_BLOG_POST_FIELDS.SHORT_BODY as 'fields'
            ],
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            return response;
        })
}


export {
    fetchBySlug,
    fetchListPaginated
}