'use server';
import {BodyPostsList, PostsListLayoutType} from "~/models";
import { mapSanityList as mapBlogPostsListSanity } from './blogPost.map';


export const mapSanity = (raw: any) => {
    console.log("RAW", raw)
    const target: Partial<BodyPostsList> = {
        cmsSource: 'Sanity',
        contentType: 'BodyPostsList',
        sysId: raw.sysId as string,
        name: raw.name as string,
        limitPerPage: 0,
        isPaginated: false,
        postsListIdentifier: 'Custom',
        layout: raw.layout as PostsListLayoutType,
        posts: mapBlogPostsListSanity(raw.postsList)
    };
    return target as BodyPostsList;
}