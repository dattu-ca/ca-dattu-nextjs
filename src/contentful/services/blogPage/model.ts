import {Entry} from "contentful";
import {IBlogPageFields} from "../../schema/generated";
import {mapContentfulList as mapBodyImagesContentfulList} from '../bodyImages';
import { mapContentfulList as mapBodySidebarContentfulList} from '../bodySidebar';
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


export const mapContentful = (raw: Entry<BlogPageSkeleton, undefined, string>) => {
    const source = raw.fields
    const target: Partial<IBlogPage> = {};
    if (source.slug) {
        target.slug = source.slug as string;
    }
    if (source.heading) {
        target.heading = source.heading as string;
    }
    if (source.body) {
        target.body = source.body as object;
    }
    if (source.banners) {
        target.banners = mapBodyImagesContentfulList(source.banners);
    }
    if (source.sidebars) {
        target.sidebars = mapBodySidebarContentfulList(source.sidebars);
    }
    return target as IBlogPage;
}
