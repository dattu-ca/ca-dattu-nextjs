'use server';
import {BlocksBodyContent, BlogPost} from "~/models";
import { mapSanityList as mapBlocksBodyContentSanityList } from './blocksBodyContent.map'

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
        
        
        postsLists: []
    }


    return target as BlogPost;
}

export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as BlogPost[];