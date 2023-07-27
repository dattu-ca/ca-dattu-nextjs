import {blogNavbarServices} from "~/contentful";


export const getBlogNavbar = (slug: string) => blogNavbarServices.getBlogNavbar(slug);