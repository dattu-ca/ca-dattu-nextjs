import {apolloClient} from "~/contentful/client";
import {queryGetBlogPage} from "~/contentful/graphql/queries";
import {IBlogPage} from "~/models";


export const mapContentful = (item) => {
    const result: IBlogPage = {banners: []};


    return result;
}


const getBlogPage = async (slug: string) => {
    const {data} = await apolloClient.query({
        query: queryGetBlogPage,
        variables: {
            slug: slug
        }
    });
    const mapped = mapContentful(data);

    return mapped;
}

export const blogPageServices = {
    getBlogPage
}