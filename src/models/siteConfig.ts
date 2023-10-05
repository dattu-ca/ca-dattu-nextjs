import {BaseModel} from "./types";

export interface SiteConfig extends BaseModel<'SiteConfig'> {
    slug: string;
    siteTitleTemplate: string;
    siteTitleDefault: string;
    siteDescription: string;
}