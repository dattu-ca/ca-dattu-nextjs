import {IBodyImage} from "./bodyImage";
import {IBodyYoutube} from "./bodyYoutube";

export interface IBlogPage {
    contentType: 'BlogPage';
    slug?: string;
    heading?: string;
    banners: (IBodyImage | IBodyYoutube)[];
    body?: object;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}