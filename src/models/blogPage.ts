import {BodyImage} from "./bodyImage";
import {BodyYoutube} from "./bodyYoutube";

export interface BlogPage {
    contentType: 'BlogPage';
    slug?: string;
    heading?: string;
    banners: (BodyImage | BodyYoutube)[];
    body?: object;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}