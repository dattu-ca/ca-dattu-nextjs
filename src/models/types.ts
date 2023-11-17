export type BaseModel<ContentType> = {
    sysId: string;
    contentType: ContentType;
    cmsSource?: 'Sanity' | undefined;
}