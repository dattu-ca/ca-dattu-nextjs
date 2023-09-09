import {client} from "../client";
import {SiteNavbarSkeleton, mapContentful} from '../schema/siteNavbar.schema';


const content_type = 'siteNavbar';

const CONTENTFUL_SITE_NAVBAR_FIELDS = {
    SLUG: 'fields.slug',
    LOGO: 'fields.logo',
    LINKS: 'fields.links',
    OPEN_MENU_TEXT: 'fields.openMenuText',
    CLOSE_MENU_TEXT: 'fields.closeMenuText'
}

const fetchBySlug = (slug: string) =>
    client
        .getEntries<SiteNavbarSkeleton>({
            content_type,
            select: [
                CONTENTFUL_SITE_NAVBAR_FIELDS.LOGO as 'fields',
                CONTENTFUL_SITE_NAVBAR_FIELDS.LINKS as 'fields',
                CONTENTFUL_SITE_NAVBAR_FIELDS.OPEN_MENU_TEXT as 'fields',
                CONTENTFUL_SITE_NAVBAR_FIELDS.CLOSE_MENU_TEXT as 'fields',
            ],
            [CONTENTFUL_SITE_NAVBAR_FIELDS.SLUG]: slug,
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

export {
    fetchBySlug
}