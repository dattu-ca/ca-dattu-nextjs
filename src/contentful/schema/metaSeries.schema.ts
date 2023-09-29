import {MetaSeries} from "~/models";
import {IMetaSeriesFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type MetaSeriesSkeleton = IBaseSkeleton<'metaSeries', IMetaSeriesFields>;

export const mapContentful = (raw: any) => {
    const source = raw as MetaSeriesSkeleton;
    const fields = source.fields;
    const target: Partial<MetaSeries> = {
        sysId: source.sys.id,
        contentType: 'MetaSeries'
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
    return target as MetaSeries;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));