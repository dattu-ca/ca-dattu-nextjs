import {MetaSeries} from "~/models";
import {mapSanityList as mapBlocksBodyContentSanityList} from "./blocksBodyContent.map";

export const mapSanity = (raw: any) => {
    const target: Partial<MetaSeries> = {
        cmsSource: 'Sanity',
        contentType: 'MetaSeries',
        sysId: raw?.sysId as string,
        slug: raw?.slug as string,
        name: raw?.name as string,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw?.preHeadingContentBlocks),
        contentBlocks: mapBlocksBodyContentSanityList(raw?.contentBlocks),
    }
    return target as MetaSeries;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as MetaSeries[];