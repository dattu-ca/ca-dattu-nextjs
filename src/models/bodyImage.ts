import {BaseModel} from "./types";

export interface IImage {
    contentType: 'Image';
    url: string;
    alt?: string | undefined;
}


export interface BodyImage extends BaseModel<'BodyImage'> {
    name?: string | undefined;
    maxWidth: number | 'auto';
    maxHeight: number | 'auto';
    align: 'left' | 'right' | 'center';
    desktopImage?: IImage;
    mobileImage?: IImage;
}