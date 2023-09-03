import {IBodyImage} from "./bodyImage";
import {IBodySidebar} from "./bodySidebar";

interface IBlogPostCommon {
    slug?: string;
    heading?: string;
}

export interface IBlogPostSmall extends IBlogPostCommon {
    shortBody?: object
}

export interface IBlogPost extends IBlogPostCommon {
    banners: IBodyImage[]
    body?: object;
    sidebars?: IBodySidebar[];
}