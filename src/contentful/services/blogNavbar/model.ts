import {Entry} from "contentful";
import {IBlogNavbar, IBlogNavbarLink} from "~/models";
import {IBlogNavbarFields, IBodyImagesFields} from "../../schema/generated";


export const content_type = 'blogNavbar';

export const CONTENTFUL_BLOG_NAVBAR_FIELDS = {
    SLUG: 'fields.slug',
    ENTRY_TITLE: 'fields.entryTitle',
    LOGO: 'fields.logo',
    NAV_LINKS: 'fields.navLinks',
    OPEN_MENU_TEXT: 'fields.openMenuText',
    CLOSE_MENU_TEXT: 'fields.closeMenuText',
    EXPAND_SUB_MENU_TEXT: 'fields.expandSubMenuText',
    COLLAPSE_SUB_MENU_TEXT: 'fields.collapseSubMenuText',
}


export type BlogNavbarSkeleton = {
    contentTypeId: 'blogNavbar'
    fields: IBlogNavbarFields
}


export const mapContentful = (item: Entry<BlogNavbarSkeleton, undefined, string>) => {
    const result: IBlogNavbar = {navLinks: []};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.navLinks) {
        result.navLinks = item.fields.navLinks as IBlogNavbarLink[];
    }
    if (item.fields.logo) {
        const logo = item.fields.logo['fields'] as IBodyImagesFields;
        result.logo = {
            slug: logo.slug,
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
    console.log("item.fields", item.fields)
    if (item.fields.expandSubMenuText) {
        result.expandSubMenuText = item.fields.expandSubMenuText as string;
    }
    if (item.fields.collapseSubMenuText) {
        result.collapseSubMenuText = item.fields.collapseSubMenuText as string;
    }
    return result;
}
