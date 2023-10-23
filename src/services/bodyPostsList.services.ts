import {blogPostServices} from '~/sanity/services';
import {BlocksBodyContent, PaginationConfig, PostsListIdentifierType} from "~/models";

//
// const fetchPostsList = async () => {
//     const result = await blogPostServices.fetchListPaginated();
//     return result;
// }

const fillPostsList = async (mainPostsListIdentifier: PostsListIdentifierType,
                             paginationConfig: PaginationConfig,
                             blocks: (BlocksBodyContent[] | undefined)
) => {
    if (Array.isArray(blocks) && blocks.length > 0) {
        for (const contentBlock of blocks) {
            if(contentBlock && Array.isArray(contentBlock.columns) && contentBlock.columns.length > 0){
                for (const column of contentBlock.columns) {
                    if(column && Array.isArray(column.contentBlocks) && column.contentBlocks.length > 0){
                        for (const contentBlock of column.contentBlocks) {
                            if (contentBlock.contentType === 'BodyPostsList') {
                                const limit = contentBlock.limitPerPage > 0 ? contentBlock.limitPerPage : paginationConfig.limit;
                                const skip = (paginationConfig.current - 1) * limit;
                                if (contentBlock.postsListIdentifier === mainPostsListIdentifier) {
                                    const response = await blogPostServices.fetchList(skip, limit);
                                    contentBlock.posts = response.items;
                                    contentBlock.paginationData = {
                                        ...paginationConfig,
                                        limit: limit,
                                        skip: skip,
                                        total: response.total,
                                        totalPages: Math.ceil((response.total / limit))
                                    }

                                }
                            }
                        }
                    }
                }
            }
            
        }
    }

}

export const processFillingPostsList = async (mainPostsListIdentifier: PostsListIdentifierType,
                                              paginationConfig: PaginationConfig,
                                              blocksArray: (BlocksBodyContent[] | undefined)[]) => {
    if (Array.isArray(blocksArray) && blocksArray.length > 0) {
        for (const block of blocksArray) {
            await fillPostsList(mainPostsListIdentifier, paginationConfig, block);
        }
    }

}


