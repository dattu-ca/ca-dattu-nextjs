import {client, CONTENTFUL_BLOG_NAVBAR_FIELDS} from "~/contentful";
import { content_type, BlogNavbarSkeleton, mapContentful } from './model'

const getBlogNavbar = (slug: string) =>
    client
        .getEntries<BlogNavbarSkeleton>({
            content_type,
            select: [CONTENTFUL_BLOG_NAVBAR_FIELDS.LOGO as 'fields', CONTENTFUL_BLOG_NAVBAR_FIELDS.NAV_LINKS as 'fields'],
            [CONTENTFUL_BLOG_NAVBAR_FIELDS.SLUG]: slug,
            include: 3,
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

export const blogNavbarServices = {
    getBlogNavbar
}