'use server';
import { AllPosts } from "~/models";
import { mapSanityList as mapBlocksBodyContentSanityList } from './blocksBodyContent.map'


export const mapSanity = (raw: any) => {
    const target: Partial<AllPosts> = {
        cmsSource: 'Sanity',
        contentType: 'AllPosts',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        displayHeading: raw.displayHeading as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks, "PreHeadingContent"),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks, "Content"),
    }


    return target as AllPosts;
}