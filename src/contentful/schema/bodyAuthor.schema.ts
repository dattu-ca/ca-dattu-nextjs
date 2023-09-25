import {IBlogPost, IBodyAuthor} from "~/models";
import {IBodyAuthorFields} from "./generated/index";

export type BodyAuthorSkeleton = {
    contentTypeId: 'bodyAuthor'
    fields: IBodyAuthorFields
}

export const mapContentful = (raw: any) => {
    const source = (raw as BodyAuthorSkeleton).fields;
    const result: Partial<IBodyAuthor> = {};
    if (source.slug) {
        result.slug = source.slug as string;
    }
    if (source.name) {
        result.name = source.name as string;
    }
    if (source.shortBio) {
        result.shortBio = source.shortBio as object;
    }
    return result as IBodyAuthor;
}


export const mapContentfulList = (raw: any[]) => {
    const target: IBodyAuthor[] = raw.map(source => mapContentful(source));
    return target;
}