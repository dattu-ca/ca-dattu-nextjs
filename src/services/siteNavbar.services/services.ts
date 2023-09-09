'use server';
import {siteNavbarServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => siteNavbarServices.fetchBySlug(slug);