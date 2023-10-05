'use server';
import {siteConfigServices} from "~/sanity/services";


export const fetchBySlug = () => siteConfigServices.fetchBySlug();