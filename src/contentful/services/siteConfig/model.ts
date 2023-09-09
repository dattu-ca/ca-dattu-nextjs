import {Entry} from "contentful";
import {ISiteConfig} from "~/models";
import {ISiteConfigFields} from "../../schema/generated";



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

export const mapContentful = (raw: Entry<SiteConfigSkeleton, undefined, string>) => {
    const source = raw.fields;
    const result: Partial<ISiteConfig> = {};
    if (source.slug) {
        result.slug = source.slug as string;
    }
    if (source.siteTitleTemplate) {
        result.siteTitleTemplate = source.siteTitleTemplate as string;
    }
    if (source.siteTitleDefault) {
        result.siteTitleDefault = source.siteTitleDefault as string;
    }
    if (source.siteDescription) {
        result.siteDescription = source.siteDescription as string;
    }
    return result as ISiteConfig;
}