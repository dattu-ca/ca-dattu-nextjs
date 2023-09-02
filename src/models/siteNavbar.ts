import {IBodyImage} from "./bodyImage";
import {IBodyLinks} from "./bodyLinks";

export interface ISiteNavbar {
    slug: string;
    logo: IBodyImage;
    links: IBodyLinks;
    openMenuText: string;
    closeMenuText: string;
}