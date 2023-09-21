import {ISiteConfig} from "~/models";
import {ISiteConfigFields} from "./generated/index";

export type SiteConfigSkeleton = {
    contentTypeId: 'siteConfig'
    fields: ISiteConfigFields
}

export const mapContentful = (raw: any) => {
    const source = (raw as SiteConfigSkeleton).fields;
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