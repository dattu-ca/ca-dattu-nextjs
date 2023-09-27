import {MetaSeries} from "~/models";
import {IMetaSeriesFields} from "./generated/index";

export type MetaSeriesSkeleton = {
    contentTypeId: 'metaSeries';
    fields: IMetaSeriesFields;
    sys: {
        id: string;
    };
}

export const mapContentful = (raw: any) => {
    const source = raw as MetaSeriesSkeleton;
    const fields = source.fields;
    const result: Partial<MetaSeries> = {
        sysId: source.sys.id,
        contentType: 'MetaSeries'
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
    return result as MetaSeries;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));