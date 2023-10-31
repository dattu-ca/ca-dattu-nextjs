'use server';
import {BlogPost} from "~/models";
import {mapSanityList as mapBlocksBodyContentSanityList} from './blocksBodyContent.map'
import {mapSanityList as mapBlogAuthorsSanityList} from './blogAuthor.map';
import {mapSanityList as mapMetaTagSanityList} from './metaTag.map';
import {mapSanity as mapMetaSeriesSanity} from './metaSeries.map';
import {mapSanityList as mapMetaCategorySanityList} from './metaCategory.map';

export const mapSanity = (raw: any) => {
    const target: Partial<BlogPost> = {
        cmsSource: 'Sanity',
        contentType: 'BlogPost',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        heading: raw.heading as string,
        datePublished: new Date(raw.datePublished),
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks),
        preHeadingExcerptBlocks: mapBlocksBodyContentSanityList(raw.preHeadingExcerptBlocks),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks),
        excerptBlocks: mapBlocksBodyContentSanityList(raw.excerptBlocks),
        format: 'Standard',
        authors: mapBlogAuthorsSanityList(raw.authors),
        series: mapMetaSeriesSanity(raw.series),
        categories: mapMetaCategorySanityList(raw.categories),
        tags: mapMetaTagSanityList(raw.tags),
        seriesPostsList: []
    }
    return target as BlogPost;
}

export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as BlogPost[];