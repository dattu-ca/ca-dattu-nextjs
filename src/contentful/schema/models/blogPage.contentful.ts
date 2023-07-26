import {BlogPageClass} from "~/models/blogPage.class";
import {IBlogPage, IBlogPageFields} from "../generated/contentful";
import {Entry} from "contentful";
import {client, CONTENTFUL_BLOG_PAGE_FIELDS} from "~/contentful";


export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (item: Entry<BlogPageSkeleton, undefined, string>) => {
    const result = new BlogPageClass();
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.heading) {
        result.heading = item.fields.heading as string;
    }
    if (item.fields.body) {
        result.body = item.fields.body as object;
    }
    if (item.fields.datePublished) {
        result.datePublished = item.fields.datePublished as string;
    }
    return result;
}


const getBlogPage = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type: 'blogPage',
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
            content_type: 'blogPage',
            select: [CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.SLUG as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.DATE_PUBLISHED as 'fields'],
        })
        .then(response => response.items.map(item => {
            return mapContentful(item);
        }));

export const services = {
    getBlogPage,
    getBlogPagesList
}