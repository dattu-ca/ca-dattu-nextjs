'use server';
import {blogPostServices} from "~/contentful";


export const getBlogPosts = (skip : number = 0, limit: number = 10) => blogPostServices.getBlogPosts(skip, limit);