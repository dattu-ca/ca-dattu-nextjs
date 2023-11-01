'use server';
import {blogAuthorServices, blogPostServices} from "~/sanity/services";


export const fetchBySlug = async (slug: string) => {
    const author = await blogAuthorServices.fetchBySlug(slug);
    if (author) {
        author.totalPosts = await blogPostServices.fetchTotalByAuthorSlug(slug);
    }


    return author;
}