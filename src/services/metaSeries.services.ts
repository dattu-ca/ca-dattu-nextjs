'use server';
import {blogPostServices, metaSeriesServices} from "~/sanity/services";
import {BlogAuthor} from "~/models";

export const fetchAllSlugs = () => metaSeriesServices.fetchAllSlugs();
export const fetchBySlug = async (slug: string) => {
    const series = await metaSeriesServices.fetchBySlug(slug);
    if (series) {
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: 0,
            limit: 0,
            referenceIds: [series.sysId],
            includeExcerpts: false,
            includeAuthors: true,
            sortAscendingPublishDate: true,
        });
        series.postsListData = {
            cmsSource: series.cmsSource,
            contentType: "BodyPostsList",
            isPaginated: false,
            layout: 'Heading Only',
            limitPerPage: 0,
            displayName: 'Articles',
            posts: response.items,
            postsListIdentifier: 'Series',
            sysId: series.sysId
        }
        if (series.postsListData && series.postsListData.posts) {
            series.authorsList = series.postsListData.posts.reduce((previousValue, currentValue, currentIndex, array) => {
                const previousAuthorSysIds = previousValue.map(author => author.sysId);
                return [...previousValue, ...currentValue.authors.filter(author => !previousAuthorSysIds.includes(author.sysId))]
                    .sort((a, b) => {
                        if (a.displayName > b.displayName) {
                            return 1;
                        }
                        return -1;
                    });
            }, [] as BlogAuthor[])
        }


    }
    return series;
}