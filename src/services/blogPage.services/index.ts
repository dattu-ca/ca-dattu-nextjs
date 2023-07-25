import {client, CONTENTFUL_BLOG_PAGE_FIELDS} from '~utils/contentful';
import {BlogPageSkeleton, mapContentful} from "~utils/contentful/schema/models/blogPage.contentful";


export const getBlogPage = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type:'blogPage',
            select: [CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.BODY as 'fields'],
            [CONTENTFUL_BLOG_PAGE_FIELDS.SLUG]: slug,
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