'use server';
import {blogPostServices} from "~/contentful";


export const fetchListPaginated = (skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginated(skip, limit);