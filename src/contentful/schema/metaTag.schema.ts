import {MetaTag} from "~/models";
import {IMetaTagFields} from "./generated/index";
import {IBaseSkeleton} from "./types";
import {mapBodyPostsLists, mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';

export type MetaTagSkeleton = IBaseSkeleton<'metaTag', IMetaTagFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as MetaTagSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<MetaTag> = {
        sysId: source.sys.id,
        contentType: 'MetaTag',
        postsLists: []
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
        if (target.preHeadingContentBlocks) {
            target.postsLists = [...target.postsLists, ...mapBodyPostsLists(target.preHeadingContentBlocks)];
        }
    }
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
        if (target.contentBlocks) {
            target.postsLists = [...target.postsLists, ...mapBodyPostsLists(target.contentBlocks)];
        }
    }
    return target as MetaTag;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as MetaTag[];