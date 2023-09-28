'use server';
import {client} from "../client";
import { BlogHomeSkeleton, mapContentful} from '../schema/blogHome.schema';

const FIELDS = {
    SLUG: 'fields.slug',
    BODY: 'fields.body',
    FEATURED_POST: 'fields.featuredPost',
    SPOTLIGHT_POSTS: 'fields.spotlightPosts',
}

const content_type = 'blogHome';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogHomeSkeleton>({
            content_type,
            select: [
                FIELDS.BODY as 'fields',
                FIELDS.FEATURED_POST as 'fields',
                FIELDS.SPOTLIGHT_POSTS as 'fields',
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