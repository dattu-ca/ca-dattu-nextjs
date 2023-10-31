'use server';
import {blogAuthorServices} from "~/sanity/services";


export const fetchBySlug = (slug: string) => blogAuthorServices.fetchBySlug(slug)