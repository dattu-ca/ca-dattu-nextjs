import {MetaSeries} from "~/models";
import {IMetaSeriesFields} from "./generated/index";
import {IBaseSkeleton} from "./types";
import {mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';

export type MetaSeriesSkeleton = IBaseSkeleton<'metaSeries', IMetaSeriesFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as MetaSeriesSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<MetaSeries> = {
        sysId: source.sys.id,
        contentType: 'MetaSeries'
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
    }
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
    }
    return target as MetaSeries;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as MetaSeries[];