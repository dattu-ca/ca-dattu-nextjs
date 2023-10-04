'use server';
import {authConfigServices} from "~/sanity/services";


export const fetchBySlug = (slug: string) => authConfigServices.fetchBySlug(slug)