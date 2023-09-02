import {client} from "../../client";
import {content_type, BlogPageSkeleton, mapContentful, CONTENTFUL_BLOG_PAGE_FIELDS} from './model'

const getBlogPage = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [
                CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', 
                CONTENTFUL_BLOG_PAGE_FIELDS.BODY as 'fields',
                CONTENTFUL_BLOG_PAGE_FIELDS.BANNERS as 'fields',
                CONTENTFUL_BLOG_PAGE_FIELDS.SIDEBARS as 'fields'
            ],
            [CONTENTFUL_BLOG_PAGE_FIELDS.SLUG]: slug,
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


export const blogPageServices = {
    getBlogPage
}