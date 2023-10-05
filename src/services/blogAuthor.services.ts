'use server';
import {blogAuthorServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => blogAuthorServices.fetchBySlug(slug)