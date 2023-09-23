import {IBlogPost} from "~/models";
import {IBlogPostFields} from "./generated/index";
import {mapContentfulList as mapBodyImagesContentfulList} from './bodyImages.schema';



export type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: IBlogPostFields
}


export const mapContentful = (raw: any) => {
    const source = (raw as BlogPostSkeleton).fields
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
    return target as IBlogPost;
}
