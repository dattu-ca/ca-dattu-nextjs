import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BodyYoutube} from "./bodyYoutube";
import {BlocksBodyContent} from "./blocksBodyContent";


export interface BlogPage extends BaseModel<'BlogPage'> {
    slug?: string | undefined;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    banners: (BodyImage | BodyYoutube)[];
    body?: object | undefined;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}