import {IBlogPageFields} from "./generated/index";
import {IBlogPage} from "~/models";
import {mapBanners} from "./utils";


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
        target.banners = mapBanners(source.banners);
    }
    return target as IBlogPage;
}
