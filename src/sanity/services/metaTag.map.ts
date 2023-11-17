import {MetaTag} from "~/models";
import {mapSanityList as mapBlocksBodyContentSanityList} from "./blocksBodyContent.map";

export const mapSanity = (raw: any) => {
    const target: Partial<MetaTag> = {
        cmsSource: 'Sanity',
        contentType: 'MetaTag',
        sysId: raw?.sysId as string,
        slug: raw?.slug as string,
        displayName: raw?.displayName as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw?.preHeadingContentBlocks, "PreHeadingContent"),
        contentBlocks: mapBlocksBodyContentSanityList(raw?.contentBlocks, "Content"),
        totalPosts: 0,
    }
    return target as MetaTag;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as MetaTag[];