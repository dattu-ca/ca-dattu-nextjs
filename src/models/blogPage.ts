import {IBodyImage} from "./bodyImage";
import {IBodySidebar} from "./bodySidebar";

export interface IBlogPage {
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
    sidebars?: IBodySidebar[];
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}