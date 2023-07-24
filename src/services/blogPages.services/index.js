import {client, CONTENT_TYPE} from '~utils/contentful'

export const getBlogPagesList = () =>
    client
        .getEntries({
            content_type: CONTENT_TYPE.BLOG_PAGE,
            select: 'fields.heading,fields.slug,fields.datePublished',
        })
        .then(response => {
            console.log(response);
            return response;
        });