export interface IImage {
    contentType: 'Image';
    url: string;
    alt?:string;
}


export interface IBodyImage {
    contentType: 'BodyImage';
    desktopImage?: IImage;
    mobileImage?: IImage;
}