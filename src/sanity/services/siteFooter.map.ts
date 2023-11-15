'use server';
import {SiteFooter} from "~/models";
import {mapSanity as mapBodyLinksSanity} from './bodyLinks.map';
import {DateTime} from "groq-js";

export const mapSanity = (raw: any): SiteFooter => {
    return {
        cmsSource: 'Sanity',
        contentType: 'SiteFooter',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        links: mapBodyLinksSanity(raw.links),
        copyright: (raw?.copyright || '').replace(/%%YEAR%%/, new Date().getFullYear()) as string,
    } as SiteFooter;
}