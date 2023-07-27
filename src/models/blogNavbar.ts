import {IBodyImage} from "~/models/bodyImage";

export interface IBlogNavbarLink {
    label: string;
    url: string;
}

export interface IBlogNavbar {
    slug?: string;
    logo?: IBodyImage;
    navLinks: IBlogNavbarLink[]
}