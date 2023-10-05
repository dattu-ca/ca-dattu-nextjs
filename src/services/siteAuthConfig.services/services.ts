'use server';
import {siteAuthConfigServices} from "~/sanity/services";


export const fetchBySlug = (slug: string) => siteAuthConfigServices.fetchBySlug(slug);