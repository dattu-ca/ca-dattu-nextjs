import {BlogHome} from "~/models";
import {IBlogHomeFields} from "./generated/index";
import {IBaseSkeleton} from "./types";
import {mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';

export type BlogHomeSkeleton = IBaseSkeleton<'blogHome', IBlogHomeFields>

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlogHomeSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<BlogHome> = {
        contentType: 'BlogHome',
        sysId: source.sys.id,
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
    }
    return target as BlogHome;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogHome[];