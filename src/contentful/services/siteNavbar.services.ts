'use server';
import {client} from "../client";
import {SiteNavbarSkeleton, mapContentful} from '../schema/siteNavbar.schema';


const FIELDS = {
    SLUG: 'fields.slug',
    LOGO: 'fields.logo',
    LINKS: 'fields.links',
    OPEN_MENU_TEXT: 'fields.openMenuText',
    CLOSE_MENU_TEXT: 'fields.closeMenuText'
}

const content_type = 'siteNavbar';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<SiteNavbarSkeleton>({
            content_type,
            select: [
                FIELDS.LOGO as 'fields',
                FIELDS.LINKS as 'fields',
                FIELDS.OPEN_MENU_TEXT as 'fields',
                FIELDS.CLOSE_MENU_TEXT as 'fields',
            ],
            [FIELDS.SLUG]: slug,
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
        })

export {
    fetchBySlug
}