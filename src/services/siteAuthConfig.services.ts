'use server';
import {siteAuthConfigServices} from "~/sanity/services";


export const fetchBySlug = () => siteAuthConfigServices.fetchBySlug();