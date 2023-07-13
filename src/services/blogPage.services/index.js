import {client, CONTENT_TYPE} from '~utils/contentful'

export const getSingleBlogPage = (slug) =>
    client
        .getEntries({
            'fields.slug': slug,
            content_type: CONTENT_TYPE.BLOG_PAGE,
        })
        .then(response => {
            if (response.items.length > 0) {
                return response.items[0];
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        });