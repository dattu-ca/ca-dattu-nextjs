import {BlogAuthor} from "~/models";
import {mapContentful as mapBodyImageContentful} from './bodyImages.schema';
import {IBlogAuthorFields} from "./generated/index";
import {mapBanners} from "./utils";

export type BlogAuthorSkeleton = {
    contentTypeId: 'blogAuthor'
    fields: IBlogAuthorFields,
    sys: {
        id: string;
    }
}

export const mapContentful = (raw: any) => {
    const source = raw as BlogAuthorSkeleton;
    const fields = source.fields;
    const target: Partial<BlogAuthor> = {
        contentType: 'BlogAuthor',
        sysId: source.sys.id,
    };

    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.shortBio) {
        target.shortBio = fields.shortBio as object;
    }
    if (fields.bio) {
        target.bio = fields.bio as object;
    }
    if (fields.banners) {
        target.banners = mapBanners(fields.banners);
    }
    if (fields.avatar) {
        target.avatar = mapBodyImageContentful(fields.avatar);
    }
    if (fields.avatarInitials) {
        target.avatarInitials = fields.avatarInitials as string;
    }
    return target as BlogAuthor;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));