export interface MetaTag {
    sysId?: string | undefined;
    contentType: 'MetaTag';
    slug: string;
    name: string;
    description?: object | undefined;
}