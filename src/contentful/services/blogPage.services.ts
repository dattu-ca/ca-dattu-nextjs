'use server';
import {client} from "../client";
import { BlogPageSkeleton, mapContentful} from '../schema/blogPage.schema';

const CONTENTFUL_FIELDS = {
    HEADING: 'fields.heading',
    BODY: 'fields.body',
    SLUG: 'fields.slug',
    BANNERS: 'fields.banners',
    SIDEBARS: 'fields.sidebars',
}

const content_type = 'blogPage';


const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [
                CONTENTFUL_FIELDS.HEADING as 'fields',
                CONTENTFUL_FIELDS.BODY as 'fields',
                CONTENTFUL_FIELDS.BANNERS as 'fields',
                CONTENTFUL_FIELDS.SIDEBARS as 'fields'
            ],
            [CONTENTFUL_FIELDS.SLUG]: slug,
            include: 10,
        })
        .then((response) => {
            if (response.items.length === 1) {
                const item = response.items[0];
                return mapContentful(item);
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [slug]=${slug}`)
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        });

export{
    fetchBySlug,
}