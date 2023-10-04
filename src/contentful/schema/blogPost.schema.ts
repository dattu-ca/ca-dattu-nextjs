import {BlogPost, BlogPostFormat} from "~/models";
import {IBlogPostFields} from "./generated/index";
import {mapBodyPostsLists, mapContentfulList as mapBlocksBodyContentContentfulList} from './blocksBodyContent.schema';
import {mapContentfulList as mapBodyAuthorContentfulList} from './blogAuthor.schema';
import {mapContentfulList as mapMetaCategoryContentfulList} from './metaCategory.schema';
import {mapContentfulList as mapMetaTagContentfulList} from './metaTag.schema';
import {mapContentful as mapMetaSeriesContentful} from './metaSeries.schema';
import {mapFeaturedBanner} from "./utils";
import {IBaseSkeleton} from "./types";


export type BlogPostSkeleton = IBaseSkeleton<'blogPost', IBlogPostFields>;

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlogPostSkeleton;
    const fields = source.fields
    const target: Partial<BlogPost> = {
        sysId: source.sys.id,
        contentType: 'BlogPost',
        postsLists: [],
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.publishedDate) {
        target.publishedDate = new Date(fields.publishedDate);
    }
    if (fields.format) {
        target.format = fields.format as BlogPostFormat;
    }
    if (fields.preHeadingContentBlocks) {
        target.preHeadingContentBlocks = mapBlocksBodyContentContentfulList(fields.preHeadingContentBlocks);
        if (target.preHeadingContentBlocks) {
            target.postsLists = [...target.postsLists, ...mapBodyPostsLists(target.preHeadingContentBlocks)];
        }
    }
    if (fields.heading) {
        target.heading = fields.heading as string;
    }
    if (fields.featuredBanner) {
        target.featuredBanner = mapFeaturedBanner(fields.featuredBanner);
    }
    if (fields.excerptBlocks) {
        target.excerptBlocks = mapBlocksBodyContentContentfulList(fields.excerptBlocks);
        if (target.excerptBlocks) {
            target.postsLists = [...target.postsLists, ...mapBodyPostsLists(target.excerptBlocks)];
        }
    }
    if (fields.contentBlocks) {
        target.contentBlocks = mapBlocksBodyContentContentfulList(fields.contentBlocks);
        if (target.contentBlocks) {
            target.postsLists = [...target.postsLists, ...mapBodyPostsLists(target.contentBlocks)];
        }
    }
    if (fields.authors) {
        target.authors = mapBodyAuthorContentfulList(fields.authors);
    }
    if (fields.series) {
        target.series = mapMetaSeriesContentful(fields.series);
    }
    if (fields.categories) {
        target.categories = mapMetaCategoryContentfulList(fields.categories);
    }
    if (fields.tags) {
        target.tags = mapMetaTagContentfulList(fields.tags);
    }
    return target as BlogPost;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlogPost[];