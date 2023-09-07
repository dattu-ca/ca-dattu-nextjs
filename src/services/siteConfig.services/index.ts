'use server';
import {siteConfigServices} from "~/contentful";


export const getSiteConfig = (slug: string) => siteConfigServices.getSiteConfig(slug)