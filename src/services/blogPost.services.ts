'use server';
import {blogPostServices} from "~/sanity/services";


export const fetchAllActiveSlugs = () => blogPostServices.fetchAllActiveSlugs();
export const fetchBySlug = async (slug: string) => {
    const post = await blogPostServices.fetchBySlug(slug);
    if (post && post.series && post.series.sysId) {
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: 0,
            limit: 0,
            includeExcerpts: false,
            referenceIds: [post.series.sysId],
            sortAscendingPublishDate: true,
        });
        if (response && response.items) {
            post.series.postsListData = {
                cmsSource: post.cmsSource,
                contentType: "BodyPostsList",
                isPaginated: false,
                layout: 'Heading Only',
                limitPerPage: 0,
                name: 'Series Articles',
                posts: response.items,
                postsListIdentifier: "Post",
                sysId: post.sysId
            }
        }
    }
    return post;
}