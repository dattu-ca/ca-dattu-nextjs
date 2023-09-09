// import {IBlogPage} from "~/models";
// import {apolloClient} from "../../client";
// import {queryGetBlogPage} from "../queries";
//
//
//
// export const mapContentful = (item:any) => {
//     const result: IBlogPage = {banners: []};
//
//
//     return result;
// }
//
//
// const getBlogPage = async (slug: string) => {
//     const {data} = await apolloClient.query({
//         query: queryGetBlogPage,
//         variables: {
//             slug: slug
//         }
//     });
//     const mapped = mapContentful(data);
//
//     return mapped;
// }
//
// export const blogPageServices = {
//     getBlogPage
// }