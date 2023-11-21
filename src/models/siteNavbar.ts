import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";

export interface SiteNavbar extends BaseModel<'SiteNavbar'> {
    slug: string;
    logo: BodyImage;
    links: BodyLinks;
    showLinksAdminUnauthenticated: boolean;
    linksAdminUnauthenticated: BodyLinks;
    showLinksAdminAuthenticated: boolean;
    linksAdminAuthenticated: BodyLinks;
    openMenuText: string;
    closeMenuText: string;
}