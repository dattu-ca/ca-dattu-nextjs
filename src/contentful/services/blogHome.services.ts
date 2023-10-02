'use server';
import {client} from "../client";
import { BlogHomeSkeleton, mapContentful} from '../schema/blogHome.schema';

const FIELDS = {
    SLUG: 'fields.slug',
    CONTENT_BLOCKS: 'fields.contentBlocks',
}

const content_type = 'blogHome';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogHomeSkeleton>({
            content_type,
            select: [
                FIELDS.CONTENT_BLOCKS as 'fields',
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