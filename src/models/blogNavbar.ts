import {IBodyImage} from "~/models/bodyImage";

export interface IBlogNavbarLink {
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: IBlogNavbarLink[];
}

export interface IBlogNavbar {
    slug?: string;
    logo?: IBodyImage;
    navLinks: IBlogNavbarLink[];
}