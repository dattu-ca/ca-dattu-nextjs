import {IBodyImage} from "~/models/bodyImage";

export interface IBlogNavbarLink {
    label: string;
    url: string;
    links?: IBlogNavbarLink[];
}

export interface IBlogNavbar {
    slug?: string;
    logo?: IBodyImage;
    navLinks: IBlogNavbarLink[],
    openMenuText?: string;
    closeMenuText?: string;
}