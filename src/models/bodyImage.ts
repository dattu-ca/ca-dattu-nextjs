export interface IImage {
    contentType: 'Image';
    url: string;
    alt?: string;
}


export interface BodyImage {
    sysId?: string | undefined;
    contentType: 'BodyImage';
    maxWidth: number | 'auto';
    maxHeight: number | 'auto';
    align: 'left' | 'right' | 'center';
    desktopImage?: IImage;
    mobileImage?: IImage;
}