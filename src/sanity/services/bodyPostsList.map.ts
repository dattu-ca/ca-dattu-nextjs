'use server';
import {BodyPostsList, PostsListLayoutType} from "~/models";
import { mapSanityList as mapBlogPostsListSanity } from './blogPost.map';


export const mapSanity = (raw: any) => {
    const target: BodyPostsList = {
        cmsSource: 'Sanity',
        contentType: 'BodyPostsList',
        sysId: raw.sysId as string,
        displayName: raw.displayName as string,
        showName: Boolean(raw.showName),
        limitPerPage: 0,
        isPaginated: false,
        postsListIdentifier: 'Custom',
        layout: raw.layout as PostsListLayoutType,
        posts: mapBlogPostsListSanity(raw.postsList)
    };
    return target;
}