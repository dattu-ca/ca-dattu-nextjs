import {blogPostServices} from "~/services";


export const fetchPost = async (slug: string, fetchBlogPostsList: boolean) => {
    const post = await blogPostServices.fetchBySlug(slug);
    
    return post;
}