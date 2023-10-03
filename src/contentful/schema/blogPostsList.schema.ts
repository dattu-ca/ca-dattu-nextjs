import {BlogPostsList} from "~/models";
import {IBlogPostsListFields} from "./generated/index";
import {mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';
import {IBaseSkeleton} from "./types";


export type BlogPostsListSkeleton = IBaseSkeleton<'blogPostsList', IBlogPostsListFields>;

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlogPostsListSkeleton;
    const fields = source.fields
    const target: Partial<BlogPostsList> = {
        sysId: source.sys.id,
        contentType: 'BlogPostsList',
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
    }
    return target as BlogPostsList;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogPostsList[];