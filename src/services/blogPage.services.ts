'use server';
import {blogPageServices} from "~/sanity/services";

export const fetchAllSlugs = () => blogPageServices.fetchAllSlugs();
export const fetchBySlug = (slug: string) => blogPageServices.fetchBySlug(slug)