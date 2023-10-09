import {BlogPostsList} from "~/models";
import {IBlogPostsListFields} from "./generated/index";
import {mapContentfulList as mapBlocksBodyContentContentfulList, mapBodyPostsLists} from './blocksBodyContent.schema';
import {IBaseSkeleton} from "./types";


export type BlogPostsListSkeleton = IBaseSkeleton<'blogPostsList', IBlogPostsListFields>;

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlogPostsListSkeleton;
    const fields = source.fields
    const target: Partial<BlogPostsList> = {
        cmsSource: 'Contentful',
        sysId: source.sys.id,
        contentType: 'BlogPostsList',
        postsLists: [],
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
        if (target.preHeadingContentBlocks) {
            target.postsLists = [...(target.postsLists || []), ...mapBodyPostsLists(target.preHeadingContentBlocks)];
        }
    }
    if (fields.heading) {
        target.heading = fields.heading as string;
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
        if (target.contentBlocks) {
            target.postsLists = [...(target.postsLists || []), ...mapBodyPostsLists(target.contentBlocks)];
        }
    }
    return target as BlogPostsList;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogPostsList[];