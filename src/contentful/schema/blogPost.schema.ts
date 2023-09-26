import {BlogPost} from "~/models";
import {IBlogPostFields} from "./generated/index";
import {mapContentfulList as mapBodyAuthorContentfulList} from './blogAuthor.schema';
import {mapBanners} from "./utils";


export type BlogPostSkeleton = {
    contentTypeId: 'blogPost';
    fields: IBlogPostFields;
    sys: {
        id: string;
    }
}

export const mapContentful = (raw: any) => {
    const source = raw as BlogPostSkeleton;
    const fields = source.fields
    const target: Partial<BlogPost> = {
        sysId: source.sys.id,
        contentType: 'BlogPost',
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.heading) {
        target.heading = fields.heading as string;
    }
    if (fields.body) {
        target.body = fields.body as object;
    }
    if (fields.shortBody) {
        target.shortBody = fields.shortBody as object;
    }
    if (fields.banners) {
        target.banners = mapBanners(fields.banners);
    }
    if (fields.publishedDate) {
        target.publishedDate = new Date(fields.publishedDate);
    }
    if (fields.authors) {
        target.authors = mapBodyAuthorContentfulList(fields.authors);
    }
    return target as BlogPost;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));