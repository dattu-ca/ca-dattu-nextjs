import {MetaCategory} from "~/models";

export const mapSanity = (raw: any) => {
    const target: Partial<MetaCategory> = {
        cmsSource: 'Sanity',
        contentType: 'MetaCategory',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        name: raw.name as string,
    }
    return target as MetaCategory;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as MetaCategory[];