import {client, CONTENT_TYPE, BLOG_PAGE_FIELDS} from '~utils/contentful'
import {iItem, mapContentful} from "~/models/blogPage.class";

export const getBlogPagesList = () =>
    client
        .getEntries({
            content_type: CONTENT_TYPE.BLOG_PAGE,
            select: `${BLOG_PAGE_FIELDS.HEADING},${BLOG_PAGE_FIELDS.SLUG},${BLOG_PAGE_FIELDS.DATE_PUBLISHED}`
        })
        .then(response => response.items.map(item => mapContentful(item as iItem)));