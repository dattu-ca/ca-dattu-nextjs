import {IBodyImage} from "./bodyImage";

export interface IBlogPage {
    contentType: 'BlogPage';
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}