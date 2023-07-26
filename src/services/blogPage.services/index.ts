import {services} from "~/contentful/schema/models/blogPage.contentful";


export const getBlogPage = (slug: string) => services.getBlogPage(slug)