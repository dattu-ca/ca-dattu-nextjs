'use server';
import {client} from "../client";
import {SiteConfigSkeleton, mapContentful} from '../schema/siteConfig.schema'


const FIELDS = {
    SLUG: 'fields.slug',
    SITE_TITLE_TEMPLATE: 'fields.siteTitleTemplate',
    SITE_TITLE_DEFAULT: 'fields.siteTitleDefault',
    SITE_DESCRIPTION: 'fields.siteDescription',
}

const content_type = 'siteConfig';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<SiteConfigSkeleton>({
            content_type,
            select: [
                FIELDS.SITE_TITLE_TEMPLATE as 'fields',
                FIELDS.SITE_TITLE_DEFAULT as 'fields',
                FIELDS.SITE_DESCRIPTION as 'fields'
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