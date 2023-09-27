import {MetaTag} from "~/models";
import {IMetaTagFields} from "./generated/index";

export type MetaTagSkeleton = {
    contentTypeId: 'metaCategory';
    fields: IMetaTagFields;
    sys: {
        id: string;
    };
}

export const mapContentful = (raw: any) => {
    const source = raw as MetaTagSkeleton;
    const fields = source.fields;
    const result: Partial<MetaTag> = {
        sysId: source.sys.id,
        contentType: 'MetaTag'
    };
    if (fields.slug) {
        result.slug = fields.slug as string;
    }
    if (fields.name) {
        result.name = fields.name as string;
    }
    if (fields.description) {
        result.description = fields.description as object;
    }
    return result as MetaTag;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));