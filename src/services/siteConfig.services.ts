'use server';
import {siteConfigServices} from "~/sanity/services";


export const fetch = () => siteConfigServices.fetch();