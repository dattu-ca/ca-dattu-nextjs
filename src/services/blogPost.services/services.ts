'use server';
import { blogPostServices} from "~/contentful/services";


export const fetchListPaginated = (skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginated(skip, limit);
export const fetchBySlug = (slug: string) => blogPostServices.fetchBySlug(slug)