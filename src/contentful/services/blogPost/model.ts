import {Entry} from "contentful";
import {IBlogPostFields} from "../../schema/generated";
import {mapContentfulList as mapBodyImagesContentfulList} from '../bodyImages';
import { mapContentfulList as mapBodySidebarContentfulList} from '../bodySidebar';
import {IBlogPost} from "~/models";


export const CONTENTFUL_BLOG_POST_FIELDS = {
    HEADING: 'fields.heading',
    BODY: 'fields.body',
    SHORT_BODY: 'fields.shortBody',
    SLUG: 'fields.slug',
    BANNERS: 'fields.banners',
    SIDEBARS: 'fields.sidebars',
}

export const content_type = 'blogPost';

export type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: IBlogPostFields
}


export const mapContentful = (raw: Entry<BlogPostSkeleton, undefined, string>) => {
    const source = raw.fields
    const target: Partial<IBlogPost> = {};
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
    return target as IBlogPost;
}
