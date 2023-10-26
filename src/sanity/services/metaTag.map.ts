import {MetaTag} from "~/models";

export const mapSanity = (raw: any) => {
    const target: Partial<MetaTag> = {
        cmsSource: 'Sanity',
        contentType: 'MetaTag',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        name: raw.name as string,
    }
    return target as MetaTag;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as MetaTag[];