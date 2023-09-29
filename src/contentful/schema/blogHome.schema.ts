import {BlogHome} from "~/models";
import {
    mapContentful as mapBlogPostContentful,
    mapContentfulList as mapBlogPostContentfulList
} from './blogPost.schema';
import {IBlogHomeFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type BlogHomeSkeleton = IBaseSkeleton<'blogHome', IBlogHomeFields>

export const mapContentful = (raw: any) => {
    const source = raw as BlogHomeSkeleton;
    const fields = source.fields;
    const target: Partial<BlogHome> = {
        contentType: 'BlogHome',
        sysId: source.sys.id,
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.body) {
        target.body = fields.body as object;
    }
    if (fields.featuredPost) {
        target.featuredPost = mapBlogPostContentful(fields.featuredPost);
    }
    if (fields.spotlightPosts) {
        target.spotlightPosts = mapBlogPostContentfulList(fields.spotlightPosts);
    }
    return target as BlogHome;
}


export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source));