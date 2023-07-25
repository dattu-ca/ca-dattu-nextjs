export class BlogPageClass {
    slug?: string;
    heading?: string;
    body?: object;
    datePublished?: string;
    
    constructor() {
        this.slug = undefined;
        this.heading = undefined;
        this.body = undefined;
        this.datePublished = undefined;
    }
}

export interface iItem {
    fields: {
        slug: string;
        heading: string;
        body: object;
        datePublished: string;
    }
}

export const mapContentful = (item: iItem) => {
    const result = new BlogPageClass();
    result.slug = item.fields.slug;
    result.heading = item.fields.heading;
    result.body = item.fields.body;
    result.datePublished = item.fields.datePublished;
    return result;
}