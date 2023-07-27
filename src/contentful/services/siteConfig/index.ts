
import {client} from "../../client";
import {content_type, SiteConfigSkeleton, CONTENTFUL_SITE_CONFIG_FIELDS, mapContentful} from './model'

const getSiteConfig = (slug: string) =>
    client
        .getEntries<SiteConfigSkeleton>({
            content_type,
            select: [
                CONTENTFUL_SITE_CONFIG_FIELDS.SITE_TITLE_TEMPLATE as 'fields',
                CONTENTFUL_SITE_CONFIG_FIELDS.SITE_TITLE_DEFAULT as 'fields',
                CONTENTFUL_SITE_CONFIG_FIELDS.SITE_DESCRIPTION as 'fields'
            ],
            [CONTENTFUL_SITE_CONFIG_FIELDS.SLUG]: slug,
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

export const siteConfigServices = {
    getSiteConfig
}