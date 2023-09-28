'use server';
import {client} from "../client";
import { BlogPageSkeleton, mapContentful} from '../schema/blogPage.schema';

const FIELDS = {
    HEADING: 'fields.heading',
    BODY: 'fields.body',
    SLUG: 'fields.slug',
    BANNERS: 'fields.banners',
}

const content_type = 'blogPage';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogPageSkeleton>({
            content_type,
            select: [
                FIELDS.HEADING as 'fields',
                FIELDS.BODY as 'fields',
                FIELDS.BANNERS as 'fields',
            ],
            [FIELDS.SLUG]: slug,
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