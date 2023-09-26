import {IBlogPageFields} from "./generated/index";
import {BlogPage} from "~/models";
import {mapBanners} from "./utils";


export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields,
    sys: {
        id: string;
    }
}


export const mapContentful = (raw: any) => {
    const source = raw as BlogPageSkeleton;
    const fields = source.fields
    const target: Partial<BlogPage> = {
        contentType: 'BlogPage',
        sysId: source.sys.id
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
    if (fields.banners) {
        target.banners = mapBanners(fields.banners);
    }
    return target as BlogPage;
}
