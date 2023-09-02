import {Entry} from "contentful";
import {IBlogPageFields} from "../../schema/generated";
import {mapContentfulList as mapContentfulList_bodyImages} from '../bodyImages';
import {IBlogPage} from "~/models";


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
    const result: Partial<IBlogPage> = {};
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
        result.banners = mapContentfulList_bodyImages(item.fields.banners);
    }
    if (item.fields.sidebars) {

    }
    return result as IBlogPage;
}
