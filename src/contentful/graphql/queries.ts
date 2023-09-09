// import {gql} from "@apollo/client";
//
// export const fragmentBodyImagesData = gql`
//     fragment BodyImagesData on BodyImages {
//         slug
//         desktopImage {
//             url
//             description
//         }
//         desktopAltText
//         mobileImage {
//             url
//             description
//         }
//         mobileAltText
//     }
// `;
// export const fragmentBodyContentData = gql`
//     fragment BodyContentData on BodyContent{
//         body{
//             json
//         }
//     }
// `;
//
//
// export const queryGetBlogPage = gql`
//     query getBlogPage($slug: String) {
//         blogPageCollection(where: { slug: $slug }, limit: 1) {
//             items {
//                 slug
//                 heading
//                 bannersCollection {
//                     items {
//                         ...BodyImagesData
//                     }
//                 }
//                 body {
//                     json
//                     links {
//                         entries {
//                             block {
//                                 sys {
//                                     id
//                                 }
//                                 __typename
//                                 ... on BodyContent {
//                                     ...BodyContentData
//                                 }
//                                 ... on BodyImages {
//                                     ...BodyImagesData
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     ${fragmentBodyContentData}
//     ${fragmentBodyImagesData}
// `;