import {client, CONTENT_TYPE} from '~utils/contentful'
import {iItem, mapContentful} from "~/models/blogPage.class";
import {BLOG_PAGE_FIELDS} from "~/utils/contentful";


export const getSingleBlogPage = (slug) =>
    client
        .getEntries({
            'fields.slug': slug,
            content_type: CONTENT_TYPE.BLOG_PAGE,
            select: `${BLOG_PAGE_FIELDS.HEADING},${BLOG_PAGE_FIELDS.BODY}`
        })
        .then(response => {
            if (response.items.length === 1) {
                return mapContentful(response.items[0] as iItem);
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [slug]=${slug}`)
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        });