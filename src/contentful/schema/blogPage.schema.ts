import {BlogPage} from "~/models";
import {IBlogPageFields} from "./generated/index";
import {mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';
import {mapBanners} from "./utils";
import {IBaseSkeleton} from "./types";

export type BlogPageSkeleton = IBaseSkeleton<'blogPage', IBlogPageFields>

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as BlogPageSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<BlogPage> = {
        contentType: 'BlogPage',
        sysId: source.sys.id
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.heading) {
        target.heading = fields.heading as string;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
    }
    return target as BlogPage;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogPage[];