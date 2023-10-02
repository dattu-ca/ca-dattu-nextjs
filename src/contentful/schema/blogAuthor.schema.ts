import {BlogAuthor} from "~/models";
import {IBlogAuthorFields} from "./generated/index";
import {mapContentful as mapBodyImageContentful} from './bodyImages.schema';
import {mapBanners} from "./utils";
import {IBaseSkeleton} from "./types";

export type BlogAuthorSkeleton = IBaseSkeleton<'blogAuthor', IBlogAuthorFields>;


export const mapContentful = (raw: any) => {
    if(!raw){
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
    
    if (fields.avatar) {
        target.avatar = mapBodyImageContentful(fields.avatar);
    }
    if (fields.avatarInitials) {
        target.avatarInitials = fields.avatarInitials as string;
    }
    return target as BlogAuthor;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => !Boolean(item)) as BlogAuthor[];