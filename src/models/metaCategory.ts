export interface MetaCategory {
    sysId?: string | undefined;
    contentType: 'MetaCategory';
    slug: string;
    name: string;
    description?: object | undefined;
    parent?: MetaCategory | undefined;
}