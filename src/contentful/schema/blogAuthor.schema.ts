import {BlogAuthor} from "~/models";
import {IBlogAuthorFields} from "./generated/index";
import {mapContentful as mapBodyImageContentful} from './bodyImages.schema';
import {mapBanners} from "./utils";
import {IBaseSkeleton} from "./types";
import {
    mapBodyPostsLists,
    mapContentfulList as mapBlocksBodyContentContentfulList
} from "~/contentful/schema/blocksBodyContent.schema";

export type BlogAuthorSkeleton = IBaseSkeleton<'blogAuthor', IBlogAuthorFields>;


export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlogAuthorSkeleton;
    const fields = source.fields;
    if (!fields) {
        return undefined;
    }
    const target: Partial<BlogAuthor> = {
        contentType: 'BlogAuthor',
        sysId: source.sys.id,
        postsLists: [],
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
        if (target.preHeadingContentBlocks) {
            target.postsLists = [...(target.postsLists || []), ...mapBodyPostsLists(target.preHeadingContentBlocks)];
        }
    }
    if (fields.name) {
        target.name = fields.name as string;
    }

    if (fields.avatar) {
        target.avatar = mapBodyImageContentful(fields.avatar);
    }
    if (fields.avatarInitials) {
        target.avatarInitials = fields.avatarInitials as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
        if (target.contentBlocks) {
            target.postsLists = [...(target.postsLists || []), ...mapBodyPostsLists(target.contentBlocks)];
        }
    }
    return target as BlogAuthor;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogAuthor[];