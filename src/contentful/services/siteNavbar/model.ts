import {Entry} from "contentful";
import {ISiteNavbar, ILink} from "~/models";
import {ISiteNavbarFields, IBodyImagesFields} from "../../schema/generated";
import {mapContentful as mapContentful_bodyLinks} from '../bodyLinks/model';


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


export const mapLinks = (source: ILink[]): ILink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapLinks(item.links as ILink[]) : [],
}))


export const mapContentful = (item: Entry<SiteNavbarSkeleton, undefined, string>): ISiteNavbar => {
    const result: Partial<ISiteNavbar> = {};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.links) {
        result.links = mapContentful_bodyLinks(item.fields.links);
    }
    if (item.fields.logo) {
        const logo = item.fields.logo['fields'] as IBodyImagesFields;
        result.logo = {
            desktopImage: {
                alt: logo.desktopAltText,
                url: logo.desktopImage?.fields.file?.url as string
            },
            mobileImage: {
                alt: logo.mobileAltText,
                url: logo.mobileImage?.fields.file?.url as string
            }
        };
    }
    if (item.fields.openMenuText) {
        result.openMenuText = item.fields.openMenuText as string;
    }
    if (item.fields.closeMenuText) {
        result.closeMenuText = item.fields.closeMenuText as string;
    }
    return result as ISiteNavbar;
}
