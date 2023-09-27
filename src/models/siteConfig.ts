export interface SiteConfig {
    sysId?: string | undefined;
    contentType: 'SiteConfig';
    slug: string;
    siteTitleTemplate?: string | undefined;
    siteTitleDefault?: string | undefined;
    siteDescription?: string | undefined;
}