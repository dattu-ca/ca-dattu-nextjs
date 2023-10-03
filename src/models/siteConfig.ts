import {BaseModel} from "./types";

export interface SiteConfig extends BaseModel<'SiteConfig'> {
    slug: string;
    siteTitleTemplate?: string | undefined;
    siteTitleDefault?: string | undefined;
    siteDescription?: string | undefined;
}