import {MetaCategory} from "~/models";
import {IMetaCategoryFields} from "./generated/index";

export type MetaCategorySkeleton = {
    contentTypeId: 'metaCategory';
    fields: IMetaCategoryFields;
    sys: {
        id: string;
    };
}

export const mapContentful = (raw: any) => {
    const source = raw as MetaCategorySkeleton;
    const fields = source.fields;
    const result: Partial<MetaCategory> = {
        sysId: source.sys.id,
        contentType: 'MetaCategory'
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
    if(fields.parentMetaCategory){
        result.parent = mapContentful(fields.parentMetaCategory)
    }
    return result as MetaCategory;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));