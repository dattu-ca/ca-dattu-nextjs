interface IImage {
    url: string;
    alt?:string;
}


export interface IBodyImage {
    slug?: string;
    desktopImage?: IImage;
    mobileImage?: IImage;
}