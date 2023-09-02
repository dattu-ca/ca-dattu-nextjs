import {Entry} from "contentful";
import {IBlogPageFields, IBodySidebarFields} from "../../schema/generated";
import {IBlogNavbar, IBlogPage, IBodyImage} from "~/models";

export const CONTENTFUL_BLOG_PAGE_FIELDS = {
    HEADING: 'fields.heading',
    BODY: 'fields.body',
    SLUG: 'fields.slug',
    BANNERS: 'fields.banners',
    SIDEBARS: 'fields.sidebars',
}

export const content_type = 'blogPage';

export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (item: Entry<BlogPageSkeleton, undefined, string>) => {
    const result: IBlogPage = {banners: []};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.heading) {
        result.heading = item.fields.heading as string;
    }
    if (item.fields.body) {
        result.body = item.fields.body as object;
    }
    if (item.fields.banners) {
        result.banners = (item.fields.banners as any[]).map(item => {
            const banner: IBodyImage = {
                slug: item.fields.slug as string,
                desktopImage: {
                    url: item.fields.desktopImage.fields.file.url,
                    alt: item.fields.desktopImage.fields.description
                }
            }
            if (item.fields.mobileImage) {
                banner.mobileImage = {
                    url: item.fields.mobileImage.fields.file.url,
                    alt: item.fields.mobileImage.fields.description,
                }
            }
            return banner;
        })
    }
    if (item.fields.sidebars) {
        const rawItems = item.fields.sidebars as Entry<IBodySidebarFields>[];
        result.sidebars = rawItems.map(raw => ({
            slug: raw.fields['slug'] as string,
            description: raw.fields['description'] as object,
            heading: raw.fields['heading'] as string,
            navigation: raw.fields['navigation'].fields as IBlogNavbar,
        }));
    }
    return result;
}
