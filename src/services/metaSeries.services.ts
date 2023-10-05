'use server';
import {metaSeriesServices} from "~/contentful/services";

export const fetchBySlug = (slug: string) => metaSeriesServices.fetchBySlug(slug)