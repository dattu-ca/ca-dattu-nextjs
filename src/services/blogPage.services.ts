'use server';
import {blogPageServices} from "~/sanity/services";


export const fetchBySlug = (slug: string) => blogPageServices.fetchBySlug(slug)