import {Entry} from "contentful";
import {IBlogNavbar, IBlogNavbarLink} from "~/models";
import {IBlogNavbarFields, IBodyImagesFields} from "../../schema/generated";


export const content_type = 'blogNavbar';

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
    return result;
}
