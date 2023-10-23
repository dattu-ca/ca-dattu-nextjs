import {allPostsServices} from '~/sanity/services';
import {processFillingPostsList} from "./bodyPostsList.services";
import {PaginationConfig} from "~/models";


export const fetch = async (paginationConfig: PaginationConfig) => {
    const data = await allPostsServices.fetch();
    await processFillingPostsList('All', paginationConfig, [data?.contentBlocks])
    return data;
}