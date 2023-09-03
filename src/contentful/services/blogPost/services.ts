import {client} from "../../client";
import {content_type, BlogPostSkeleton, mapContentful, CONTENTFUL_BLOG_POST_FIELDS} from './model'

const getBlogPost = (slug: string) =>
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


const getBlogPosts = (skip : number = 0, limit: number = 10) => {
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


export const blogPostServices = {
    getBlogPost,
    getBlogPosts
}