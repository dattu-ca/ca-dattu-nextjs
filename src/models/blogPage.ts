import {IBodyImage} from "./bodyImage";
import {IBodySidebar} from "./bodySidebar";

export interface IBlogPage {
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
    sidebars?: IBodySidebar[];
}