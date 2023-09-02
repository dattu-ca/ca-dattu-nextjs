interface IImage {
    url: string;
    alt?:string;
}


export interface IBodyImage {
    desktopImage?: IImage;
    mobileImage?: IImage;
}