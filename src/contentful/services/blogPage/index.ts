import {CONTENTFUL_BLOG_PAGE_FIELDS} from "../../constants";
import {client} from "../../client";
import { content_type, BlogPageSkeleton, mapContentful } from './model'

const getBlogPage = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.BODY as 'fields'],
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

const getBlogPagesList = () =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.SLUG as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.DATE_PUBLISHED as 'fields'],
        })
        .then(response => response.items.map(item => {
            return mapContentful(item);
        }));

export const blogPageServices = {
    getBlogPage,
    getBlogPagesList
}