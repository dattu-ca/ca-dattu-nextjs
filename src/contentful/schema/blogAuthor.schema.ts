import {IBlogAuthor} from "~/models";
import {mapContentful as mapBodyImageContentful} from './bodyImages.schema';
import {IBlogAuthorFields} from "./generated/index";
import {mapBanners} from "./utils";

export type BlogAuthorSkeleton = {
    contentTypeId: 'blogAuthor'
    fields: IBlogAuthorFields,
}

export const mapContentful = (raw: any) => {
    const source = (raw as BlogAuthorSkeleton).fields;
    const target: Partial<IBlogAuthor> = {
        contentType: 'BlogAuthor'
    };
    
    if (source.slug) {
        target.slug = source.slug as string;
    }
    if (source.name) {
        target.name = source.name as string;
    }
    if (source.shortBio) {
        target.shortBio = source.shortBio as object;
    }
    if (source.bio) {
        target.bio = source.bio as object;
    }
    if (source.banners) {
        target.banners = mapBanners(source.banners);
    }
    if (source.avatar) {
        target.avatar = mapBodyImageContentful(source.avatar);
    }
    if (source.avatarInitials) {
        target.avatarInitials = source.avatarInitials as string;
    }
    return target as IBlogAuthor;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));