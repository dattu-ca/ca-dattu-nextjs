'use server';
import {siteConfigServices} from "~/sanity/services";


export const fetchBySlug = (slug: string) => siteConfigServices.fetchBySlug(slug);