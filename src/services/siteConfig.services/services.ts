'use server';
import {siteConfigServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => siteConfigServices.fetchBySlug(slug)