'use server';
import {metaCategoryServices} from "~/contentful/services";


export const fetchBySlug = (slug: string) => metaCategoryServices.fetchBySlug(slug)