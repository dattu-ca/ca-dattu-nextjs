import {BlogPost} from "~/models";
import {IBlogPostFields} from "./generated/index";
import {mapContentfulList as mapBodyAuthorContentfulList} from './blogAuthor.schema';
import {mapBanners} from "./utils";


export type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: IBlogPostFields
}


export const mapContentfulList = (raw: any[]) => {
    const target: BlogPost[] = raw.map(source => mapContentful(source));

    return target;
}

export const mapContentful = (raw: any) => {
    const source = (raw as BlogPostSkeleton).fields
    const target: Partial<BlogPost> = {
        contentType: 'BlogPost'
    };
    if (source.slug) {
        target.slug = source.slug as string;
    }
    if (source.heading) {
        target.heading = source.heading as string;
    }
    if (source.body) {
        target.body = source.body as object;
    }
    if (source.shortBody) {
        target.shortBody = source.shortBody as object;
    }
    if (source.banners) {
        target.banners = mapBanners(source.banners);
    }
    if (source.publishedDate) {
        target.publishedDate = new Date(source.publishedDate);
    }
    if (source.authors) {
        target.authors = mapBodyAuthorContentfulList(source.authors);
    }
    return target as BlogPost;
}
