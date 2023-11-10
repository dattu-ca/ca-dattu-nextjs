'use server';
import { BlogPage } from "~/models";
import { mapSanityList as mapBlocksBodyContentSanityList } from './blocksBodyContent.map'

export const mapSanity = (raw: any) => {
    const target: Partial<BlogPage> = {
        cmsSource: 'Sanity',
        contentType: 'BlogPage',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        heading: raw.heading as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks),
        format: 'Standard',
        layoutType: 'Default',
    }


    return target as BlogPage;
}