'use server';
import {BodyPostsList, PostsListIdentifierType, PostsListLayoutType} from "~/models";


export const mapSanity = (raw: any) => {
    const target: Partial<BodyPostsList> = {
        cmsSource: 'Sanity',
        contentType: 'BodyPostsList',
        sysId: raw.sysId as string,
        name: raw.name as string,
        limitPerPage: raw.limitPerPage as number || 0,
        isPaginated: raw.isPaginated as boolean,
        postsListIdentifier: raw.postsListIdentifier as PostsListIdentifierType,
        layout: raw.layout as PostsListLayoutType,
    };
    console.log(target);

    return target as BodyPostsList;
}