import {Entry} from "contentful";
import {ISiteConfigFields} from "~/contentful/schema/generated";
import {ISiteConfig} from "~/models";


export const content_type = 'siteConfig';

export const CONTENTFUL_SITE_CONFIG_FIELDS = {
    SLUG: 'fields.slug',
    ENTRY_TITLE: 'fields.entryTitle',
    SITE_TITLE_TEMPLATE: 'fields.siteTitleTemplate',
    SITE_TITLE_DEFAULT: 'fields.siteTitleDefault',
    SITE_DESCRIPTION: 'fields.siteDescription',
    OPEN_MENU_TEXT: 'fields.openMenuText',
    CLOSE_MENU_TEXT: 'fields.closeMenuText',
    EXPAND_SUB_MENU_TEXT: 'fields.expandSubMenuText',
    COLLAPSE_SUB_MENU_TEXT: 'fields.collapseSubMenuText',
}

export type SiteConfigSkeleton = {
    contentTypeId: 'siteConfig'
    fields: ISiteConfigFields
}

export const mapContentful = (item: Entry<SiteConfigSkeleton, undefined, string>) => {
    const result: ISiteConfig = {};
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
    if (item.fields.openMenuText) {
        result.openMenuText = item.fields.openMenuText as string;
    }
    if (item.fields.closeMenuText) {
        result.closeMenuText = item.fields.closeMenuText as string;
    }
    if (item.fields.expandSubMenuText) {
        result.expandSubMenuText = item.fields.expandSubMenuText as string;
    }
    if (item.fields.collapseSubMenuText) {
        result.collapseSubMenuText = item.fields.collapseSubMenuText as string;
    }
    return result;
}