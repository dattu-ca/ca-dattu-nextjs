'use server';
import { mapSanityList as mapBlocksBodyContentSanityList } from './blocksBodyContent.map'
import {HomePage} from "~/models";


export const mapSanity = (raw: any) => {
    const target: Partial<HomePage> = {
        cmsSource: 'Sanity',
        contentType: 'HomePage',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        heading: raw.heading as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks, "PreHeadingContent"),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks, "Content"),
    }

    return target as HomePage;
}