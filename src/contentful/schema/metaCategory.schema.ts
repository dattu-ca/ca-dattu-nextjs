import {MetaCategory} from "~/models";
import {IMetaCategoryFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type MetaCategorySkeleton = IBaseSkeleton<'metaCategory', IMetaCategoryFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as MetaCategorySkeleton;
    const fields = source.fields;
    const target: Partial<MetaCategory> = {
        sysId: source.sys.id,
        contentType: 'MetaCategory'
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.description) {
        target.description = fields.description as object;
    }
    if (fields.parentMetaCategory) {
        target.parent = mapContentful(fields.parentMetaCategory)
    }
    return target as MetaCategory;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => !Boolean(item)) as MetaCategory[];