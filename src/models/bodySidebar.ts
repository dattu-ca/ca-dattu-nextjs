import {IBlogNavbar} from "./blogNavbar";

export interface IBodySidebar {
    slug: string;
    heading: string;
    description?: object;
    navigation: IBlogNavbar;
}

