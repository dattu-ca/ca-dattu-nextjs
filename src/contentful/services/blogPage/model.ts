import {Entry} from "contentful";
import {IBlogPageFields} from "../../schema/generated";
import {IBlogPage} from "~/models";


export const content_type = 'blogPage';

export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (item: Entry<BlogPageSkeleton, undefined, string>) => {
    const result: IBlogPage = {};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.heading) {
        result.heading = item.fields.heading as string;
    }
    if (item.fields.body) {
        result.body = item.fields.body as object;
    }
    if (item.fields.datePublished) {
        result.datePublished = item.fields.datePublished as string;
    }
    return result;
}
