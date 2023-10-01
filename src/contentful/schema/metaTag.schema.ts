import {MetaTag} from "~/models";
import {IMetaTagFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type MetaTagSkeleton = IBaseSkeleton<'metaTag', IMetaTagFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as MetaTagSkeleton;
    const fields = source.fields;
    const target: Partial<MetaTag> = {
        sysId: source.sys.id,
        contentType: 'MetaTag'
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
    return target as MetaTag;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => !Boolean(item)) as MetaTag[];