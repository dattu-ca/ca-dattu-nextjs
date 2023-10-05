'use server';
import {siteConfigServices} from "~/sanity/services";
import {SiteConfig} from "~/models";


export const fetchBySlug = (slug: string) => siteConfigServices.fetchBySlug(slug) as SiteConfig;