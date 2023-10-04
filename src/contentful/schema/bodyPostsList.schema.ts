import {BodyPostsList} from "~/models";
import {IBodyPostsListFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type BodyPostListSkeleton = IBaseSkeleton<'bodyPostsList', IBodyPostsListFields>;

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BodyPostListSkeleton;
    const fields = source.fields;
    if (!fields) {
        return undefined;
    }
    const target: Partial<BodyPostsList> = {
        sysId: source.sys.id,
        contentType: 'BodyPostsList'
    };
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.postsListIdentifier) {
        target.postsListIdentifier = fields.postsListIdentifier;
    }
    if (typeof fields.limitPerPage !== 'undefined') {
        target.limitPerPage = fields.limitPerPage as number;
    }
    if (typeof fields.isPaginated !== 'undefined') {
        target.isPaginated = fields.isPaginated as boolean;
    }

    return target as BodyPostsList;
}