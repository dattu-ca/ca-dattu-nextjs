import { BaseModel } from "./types";

export interface IImage {
    contentType: 'Image';
    url: string;
    alt?: string | undefined;
    credit?: string | undefined;
    caption?: string | undefined;
}


export interface BodyImage extends BaseModel<'BodyImage'> {
    name?: string | undefined;
    maxWidth?: number | undefined;
    maxHeight?: number | undefined;
    align: 'left' | 'right' | 'center';
    desktopImage?: IImage;
    mobileImage?: IImage;
    border?: boolean;
    shadow?: boolean;
    shape?: string;
}