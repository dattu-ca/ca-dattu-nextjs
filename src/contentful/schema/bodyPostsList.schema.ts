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
    if (fields.postsListIdentifier) {
        target.postsListIdentifier = fields.postsListIdentifier;
    }
    if (fields.limitPerPage) {
        target.limitPerPage = fields.limitPerPage;
    }

    return target as BodyPostsList;
}