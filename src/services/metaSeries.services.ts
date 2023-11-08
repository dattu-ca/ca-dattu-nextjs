'use server';
import {blogPostServices, metaSeriesServices} from "~/sanity/services";
import {BlogAuthor} from "~/models";

export const fetchBySlug = async (slug: string) => {
    const metaSeries = await metaSeriesServices.fetchBySlug(slug);
    if (metaSeries) {
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: 0,
            limit: 0,
            referenceIds: [metaSeries.sysId],
            includeExcerpts: false,
            includeAuthors: true,
            sortAscendingPublishDate: true,
        });
        metaSeries.postsLists = response.items;
        metaSeries.authorsList = response.items.reduce((previousValue, currentValue, currentIndex, array) => {
            const previousAuthorSysIds = previousValue.map(author => author.sysId);
            return [...previousValue, ...currentValue.authors.filter(author => !previousAuthorSysIds.includes(author.sysId))]
                .sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    return -1;
                });
        }, [] as BlogAuthor[])
    }
    return metaSeries;
}