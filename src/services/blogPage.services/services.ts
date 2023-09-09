'use server';
import {blogPageServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => blogPageServices.fetchBySlug(slug)