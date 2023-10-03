import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";

export interface SiteNavbar extends BaseModel<'SiteNavbar'> {
    slug: string;
    logo: BodyImage;
    links: BodyLinks;
    openMenuText: string;
    closeMenuText: string;
}