import {Entry} from "contentful";
import {IBlogPageFields} from "./generated";
import {mapContentfulList as mapBodyImagesContentfulList} from './bodyImages.schema';
import { mapContentfulList as mapBodySidebarContentfulList} from './bodySidebar.schema';
import {IBlogPage} from "~/models";


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
