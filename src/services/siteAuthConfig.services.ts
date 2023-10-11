'use server';
import {siteAuthConfigServices} from "~/sanity/services";


export const fetch = () => siteAuthConfigServices.fetch();