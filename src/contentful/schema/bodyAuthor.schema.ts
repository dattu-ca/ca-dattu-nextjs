import {IBodyAuthor} from "~/models";
import { mapContentful as mapBodyImageContentful} from './bodyImages.schema';
import {IBodyAuthorFields} from "./generated/index";

export type BodyAuthorSkeleton = {
    contentTypeId: 'bodyAuthor'
    fields: IBodyAuthorFields
}

export const mapContentful = (raw: any) => {
    const source = (raw as BodyAuthorSkeleton).fields;
    const result: Partial<IBodyAuthor> = {
        contentType: 'BodyAuthor'
    };
    if (source.slug) {
        result.slug = source.slug as string;
    }
    if (source.name) {
        result.name = source.name as string;
    }
    if (source.shortBio) {
        result.shortBio = source.shortBio as object;
    }
    if (source.avatar) {
        result.avatar = mapBodyImageContentful(source.avatar);
    }
    if (source.avatarInitials) {
        result.avatarInitials = source.avatarInitials as string;
    }
    return result as IBodyAuthor;
}


export const mapContentfulList = (raw: any[]) => {
    if (raw) {
        return raw.map(source => mapContentful(source)) as IBodyAuthor[];
    }
    return [] as IBodyAuthor[];
}