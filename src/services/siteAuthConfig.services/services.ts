'use server';
import {siteAuthConfigServices} from "~/sanity/services";
import {SiteAuthConfig} from "~/models";


export const fetchBySlug = (slug: string) => siteAuthConfigServices.fetchBySlug(slug) as SiteAuthConfig;