import {client, CONTENTFUL_BLOG_PAGE_FIELDS} from '~utils/contentful'
import {BlogPageSkeleton, mapContentful} from "~utils/contentful/schema/models/blogPage.contentful";

export const getBlogPagesList = () =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type: 'blogPage',
            select: [CONTENTFUL_BLOG_PAGE_FIELDS.HEADING as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.SLUG as 'fields', CONTENTFUL_BLOG_PAGE_FIELDS.DATE_PUBLISHED as 'fields'],
        })
        .then(response => response.items.map(item => {
            return mapContentful(item);
        }));

