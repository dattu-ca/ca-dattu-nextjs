import {MetaCategory} from "~/models";
import {mapSanityList as mapBlocksBodyContentSanityList} from "./blocksBodyContent.map";

export const mapSanity = (raw: any) => {
    const target: Partial<MetaCategory> = {
        cmsSource: 'Sanity',
        contentType: 'MetaCategory',
        sysId: raw?.sysId as string,
        slug: raw?.slug as string,
        displayName: raw?.displayName as string,
        parent: raw?.parentCategory as (MetaCategory | undefined),
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks, "PreHeadingContent"),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks, "Content"),
    }
    return target as MetaCategory;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as MetaCategory[];