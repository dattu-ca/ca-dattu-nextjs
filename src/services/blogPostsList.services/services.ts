'use server';
import { blogPostsListServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => blogPostsListServices.fetchBySlug(slug)
