import {Entry} from "contentful";
import {ISiteConfigFields} from "~/contentful/schema/generated";
import {ISiteConfig} from "~/models";


export const content_type = 'siteConfig';

export const CONTENTFUL_SITE_CONFIG_FIELDS = {
    SLUG: 'fields.slug',
    SITE_TITLE_TEMPLATE: 'fields.siteTitleTemplate',
    SITE_TITLE_DEFAULT: 'fields.siteTitleDefault',
    SITE_DESCRIPTION: 'fields.siteDescription',
}

export type SiteConfigSkeleton = {
    contentTypeId: 'siteConfig'
    fields: ISiteConfigFields
}

export const mapContentful = (item: Entry<SiteConfigSkeleton, undefined, string>) => {
    const result: Partial<ISiteConfig> = {};
    if (item.fields.slug) {
        result.slug = item.fields.slug as string;
    }
    if (item.fields.siteTitleTemplate) {
        result.siteTitleTemplate = item.fields.siteTitleTemplate as string;
    }
    if (item.fields.siteTitleDefault) {
        result.siteTitleDefault = item.fields.siteTitleDefault as string;
    }
    if (item.fields.siteDescription) {
        result.siteDescription = item.fields.siteDescription as string;
    }
    return result as ISiteConfig;
}