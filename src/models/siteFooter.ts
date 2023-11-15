import {BaseModel} from "./types";
import {BodyLinks} from "./bodyLinks";

export interface SiteFooter extends BaseModel<'SiteFooter'> {
    slug: string;
    links: BodyLinks;
    copyright: string;
}