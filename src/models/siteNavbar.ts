import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";

export interface ISiteNavbar {
    contentType: 'SiteNavbar';
    slug: string;
    logo: BodyImage;
    links: BodyLinks;
    openMenuText: string;
    closeMenuText: string;
}