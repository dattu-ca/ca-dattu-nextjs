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