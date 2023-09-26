import {IBlogPost, IBodyImage, IBodyYoutube} from "~/models";
import {IBlogPostFields} from "./generated/index";
import {
    mapContentful as mapBodyImagesContentful,
} from './bodyImages.schema';
import {mapContentfulList as mapBodyAuthorContentfulList} from './bodyAuthor.schema';
import {mapContentful as mapBodyYoutubeContentful} from "~/contentful/schema/bodyYoutube.schema";


export type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: IBlogPostFields
}


export const mapContentfulList = (raw: any[]) => {
    const target: IBlogPost[] = raw.map(source => mapContentful(source));

    return target;
}

export const mapContentful = (raw: any) => {
    const source = (raw as BlogPostSkeleton).fields
    const target: Partial<IBlogPost> = {
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
        const result = source.banners.map(banner => {
            const contentType = banner.sys.contentType.sys.id;
            if (contentType === 'bodyImages') {
                return mapBodyImagesContentful(banner)
            } else if (contentType === 'bodyYouTube') {
                return mapBodyYoutubeContentful(banner);
            }
            return undefined;
        });
        target.banners = result.filter(item => Boolean(item)) as (IBodyYoutube | IBodyImage)[];
    }
    if (source.publishedDate) {
        target.publishedDate = new Date(source.publishedDate);
    }
    if (source.authors) {
        target.authors = mapBodyAuthorContentfulList(source.authors);
    }
    return target as IBlogPost;
}
