import {BlogPageClass} from "~/models/blogPage.class";
import {IBlogPage, IBlogPageFields} from "../generated/contentful";
import {Entry} from "contentful";


export type BlogPageSkeleton = {
    contentTypeId: 'blogPage'
    fields: IBlogPageFields
}


export const mapContentful = (item: Entry<BlogPageSkeleton, undefined, string>) => {
    const result = new BlogPageClass();
    if(item.fields.slug){
        result.slug = item.fields.slug as string;    
    }
    if(item.fields.heading){
        result.heading = item.fields.heading as string;    
    }
    if(item.fields.body){
        result.body = item.fields.body as object;    
    }
    if(item.fields.datePublished){
        result.datePublished = item.fields.datePublished as string;    
    }
    return result;
}