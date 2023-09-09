'use server';
import {blogPageServices} from "~/contentful";


export const fetchBySlug = (slug: string) => blogPageServices.getBlogPage(slug)