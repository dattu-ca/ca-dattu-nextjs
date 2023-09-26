import {SiteConfig} from "~/models";
import {ISiteConfigFields} from "./generated/index";

export type SiteConfigSkeleton = {
    contentTypeId: 'siteConfig';
    fields: ISiteConfigFields;
    sys: {
        id: string;
    };
}

export const mapContentful = (raw: any) => {
    const source = raw as SiteConfigSkeleton;
    const fields = source.fields;
    const result: Partial<SiteConfig> = {
        sysId: source.sys.id,
        contentType: 'SiteConfig'
    };
    if (fields.slug) {
        result.slug = fields.slug as string;
    }
    if (fields.siteTitleTemplate) {
        result.siteTitleTemplate = fields.siteTitleTemplate as string;
    }
    if (fields.siteTitleDefault) {
        result.siteTitleDefault = fields.siteTitleDefault as string;
    }
    if (fields.siteDescription) {
        result.siteDescription = fields.siteDescription as string;
    }
    return result as SiteConfig;
}