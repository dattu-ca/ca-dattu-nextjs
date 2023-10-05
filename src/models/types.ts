export type BaseModel<ContentType> = {
    sysId: string;
    contentType: ContentType;
    cmsSource?: 'Contentful' | 'Sanity' | undefined;
}