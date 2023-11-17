import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface BlogPage extends BaseModel<'BlogPage'> {
    slug: string;
    displayHeading?: string | undefined;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;    
    contentBlocks?: BlocksBodyContent[] | undefined;
    format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";
    layoutType: "Default" | "Right Sidebar" | "Left Sidebar" | "No Sidebar" | "Full Width";
}