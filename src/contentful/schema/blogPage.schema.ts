import {IBlogPageFields} from "./generated/index";
import {mapContentful as mapBodyImagesContentful} from './bodyImages.schema';
import {mapContentful as mapBodyYoutubeContentful} from './bodyYoutube.schema';
import {IBlogPage, IBodyImage, IBodyYoutube} from "~/models";


export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (raw: any) => {
    const source = (raw as BlogPageSkeleton).fields
    const target: Partial<IBlogPage> = {
        contentType: 'BlogPage'
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
    return target as IBlogPage;
}
