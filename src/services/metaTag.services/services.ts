'use server';
import {metaTagServices} from "~/contentful/services";

export const fetchBySlug = (slug: string) => metaTagServices.fetchBySlug(slug)