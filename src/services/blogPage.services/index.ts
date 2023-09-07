'use server';
import {blogPageServices} from "~/contentful";


export const getBlogPage = (slug: string) => blogPageServices.getBlogPage(slug)