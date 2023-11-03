'use server';
import {blogPostServices} from "~/sanity/services";
import {processFillingPostsList} from "~/services/bodyPostsList.services";
import {PaginationConfig} from "~/models";

export const fetchBySlug = async (slug: string) => {
    const post = await blogPostServices.fetchBySlug(slug);

    const paginationConfig: Partial<PaginationConfig> = {
        skip: 0,
        limit: 0,
    }

    await processFillingPostsList('Post', paginationConfig as PaginationConfig, [post?.contentBlocks])
    if (post && post.series && post.series.sysId) {
        const result = await blogPostServices.fetchListPaginatedByReference({
            skip: 0,
            limit: 0,
            includeExcerpts: false,
            referenceId: post.series.sysId,
            sortAscendingPublishDate: true,
        });
        post.seriesPostsList = result.items;
    }
    return post;
}