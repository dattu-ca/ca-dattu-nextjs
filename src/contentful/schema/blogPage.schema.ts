import {IBlogPageFields} from "./generated/index";
import {mapContentfulList as mapBodyImagesContentfulList} from './bodyImages.schema';
import {IBlogPage} from "~/models";


export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (raw: any) => {
    const source = (raw as BlogPageSkeleton).fields
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
    return target as IBlogPage;
}
