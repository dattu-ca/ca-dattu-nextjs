'use server';
import {siteNavbarServices} from "~/contentful";


export const fetchBySlug = (slug: string) => siteNavbarServices.getSiteNavbar(slug);