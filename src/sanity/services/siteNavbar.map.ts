'use server';
import {SiteNavbar} from "~/models";
import {mapSanity as mapBodyLinksSanity} from './bodyLinks.map';
import {mapSanity as mapBodyImagesSanity} from './bodyImages.map';

export const mapSanity = (raw: any): SiteNavbar => {
    return {
        cmsSource: 'Sanity',
        contentType: 'SiteNavbar',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        links: mapBodyLinksSanity(raw.links),
        showLinksAdminUnauthenticated: raw?.showLinksAdminUnauthenticated as boolean,
        linksAdminUnauthenticated: mapBodyLinksSanity(raw.linksAdminUnauthenticated),
        showLinksAdminAuthenticated: raw?.showLinksAdminAuthenticated as boolean,
        linksAdminAuthenticated: mapBodyLinksSanity(raw.linksAdminAuthenticated),
        logo: mapBodyImagesSanity(raw.logo),
        openMenuText: raw.openMenuText as string,
        closeMenuText: raw.closeMenuText as string,
    } as SiteNavbar;
}