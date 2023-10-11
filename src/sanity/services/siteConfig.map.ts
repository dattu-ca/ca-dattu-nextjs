'use server';
import {SiteConfig} from "~/models";

export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'SiteConfig',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        siteDescription: raw.siteDescription as string,
        siteTitleDefault: raw.siteTitleDefault as string,
        siteTitleTemplate: raw.siteTitleTemplate as string
    } as SiteConfig;
}