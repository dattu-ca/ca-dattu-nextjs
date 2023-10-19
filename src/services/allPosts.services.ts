import { allPostsServices } from '~/sanity/services';


export const fetch = async () => {
    const data = await allPostsServices.fetch();
    return data;
}