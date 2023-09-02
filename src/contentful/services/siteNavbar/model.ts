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


export const mapContentful = (item: Entry<SiteNavbarSkeleton, undefined, string>) => {
    const result: Partial<ISiteNavbar> = {};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.links) {
        result.links = mapContentful_bodyLinks(item.fields.links);
    }
    if (item.fields.logo) {
        result.logo = mapContentful_bodyImages(item.fields.logo);
    }
    if (item.fields.openMenuText) {
        result.openMenuText = item.fields.openMenuText as string;
    }
    if (item.fields.closeMenuText) {
        result.closeMenuText = item.fields.closeMenuText as string;
    }
    return result as ISiteNavbar;
}
