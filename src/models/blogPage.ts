import {BodyImage} from "./bodyImage";
import {BodyYoutube} from "./bodyYoutube";

export interface BlogPage {
    sysId?: string | undefined;
    contentType: 'BlogPage';
    slug?: string | undefined;
    heading?: string | undefined;
    banners: (BodyImage | BodyYoutube)[];
    body?: object | undefined;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}