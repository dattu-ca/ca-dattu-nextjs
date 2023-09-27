'use server';
import {metaTagServices} from "~/contentful/services";
import {MetaTag} from "~/models";



export const fetchBySlug = (slug: string) => metaTagServices.fetchBySlug(slug) as MetaTag