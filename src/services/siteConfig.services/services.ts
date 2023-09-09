'use server';
import {siteConfigServices} from "~/contentful";


export const fetchBySlug = (slug: string) => siteConfigServices.getSiteConfig(slug)