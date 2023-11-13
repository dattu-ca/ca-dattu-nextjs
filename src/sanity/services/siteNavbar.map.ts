'use server';
import {SiteNavbar} from "~/models";
import {mapSanity as mapBodyLinksSanity} from './bodyLinks.map';
import {mapSanity as mapBodyImagesSanity} from './bodyImages.map';

export const mapSanity = (raw: any): SiteNavbar => {
    console.log('RAW', raw)
    return {
        cmsSource: 'Sanity',
        contentType: 'SiteNavbar',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        links: mapBodyLinksSanity(raw.links),
        logo: mapBodyImagesSanity(raw.logo),
        openMenuText: raw.openMenuText as string,
        closeMenuText: raw.closeMenuText as string,
    } as SiteNavbar;
}