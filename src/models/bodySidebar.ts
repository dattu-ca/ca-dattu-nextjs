import {IBlogNavbar} from "./blogNavbar";

export interface IBodySidebar {
    entryTitle: string;
    slug: string;
    heading: string;
    description?: object;
    navigation: IBlogNavbar;
}