import {Entry} from "contentful";
import {ISiteNavbar} from "~/models";
import {ISiteNavbarFields} from "../../schema/generated";
import {mapContentful as mapContentful_bodyLinks} from '../bodyLinks';
import {mapContentful as mapContentful_bodyImages} from '../bodyImages';


export const content_type = 'siteNavbar';

export const CONTENTFUL_SITE_NAVBAR_FIELDS = {
    SLUG: 'fields.slug',
    LOGO: 'fields.logo',
    LINKS: 'fields.links',
    OPEN_MENU_TEXT: 'fields.openMenuText',
    CLOSE_MENU_TEXT: 'fields.closeMenuText'
}

export type SiteNavbarSkeleton = {
    contentTypeId: 'siteNavbar';
    fields: ISiteNavbarFields;
}


export const mapContentful = (raw: Entry<SiteNavbarSkeleton, undefined, string>) => {
    const source = raw.fields;
    const target: Partial<ISiteNavbar> = {};
    if (source.slug) {
        target.slug = source.slug as string;
    }
    if (source.links) {
        target.links = mapContentful_bodyLinks(source.links);
    }
    if (source.logo) {
        target.logo = mapContentful_bodyImages(source.logo);
    }
    if (source.openMenuText) {
        target.openMenuText = source.openMenuText as string;
    }
    if (source.closeMenuText) {
        target.closeMenuText = source.closeMenuText as string;
    }
    return target as ISiteNavbar;
}
