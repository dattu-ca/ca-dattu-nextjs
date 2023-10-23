'use server';
import { AllPosts } from "~/models";
import { mapSanityList as mapBlocksBodyContentSanityList } from './blocksBodyContent.map'


export const mapSanity = (raw: any) => {
    const target: Partial<AllPosts> = {
        cmsSource: 'Sanity',
        contentType: 'AllPosts',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        heading: raw.heading as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks),
    }


    return target as AllPosts;
}