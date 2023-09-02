import {Entry} from "contentful";
import {IBlogNavbar, IBlogNavbarLink} from "~/models";
import {IBlogNavbarFields, IBodyImagesFields} from "../../schema/generated";


export const content_type = 'blogNavbar';

export const CONTENTFUL_BLOG_NAVBAR_FIELDS = {
    SLUG: 'fields.slug',
    ENTRY_TITLE: 'fields.entryTitle',
    LOGO: 'fields.logo',
    NAV_LINKS: 'fields.navLinks'
}


export type BlogNavbarSkeleton = {
    contentTypeId: 'blogNavbar'
    fields: IBlogNavbarFields
}


export const mapNavLinks = (source: IBlogNavbarLink[]): IBlogNavbarLink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapNavLinks(item.links as IBlogNavbarLink[]) : [],
}))


export const mapContentful = (item: Entry<BlogNavbarSkeleton, undefined, string>) => {
    const result: IBlogNavbar = {navLinks: []};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.navLinks) {
        result.navLinks = mapNavLinks(item.fields.navLinks as IBlogNavbarLink[]);
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
    return result;
}
