export interface SiteConfig {
    sysId?: string | undefined;
    contentType: 'SiteConfig';
    slug: string;
    siteTitleTemplate?: string;
    siteTitleDefault?: string;
    siteDescription?: string;
}