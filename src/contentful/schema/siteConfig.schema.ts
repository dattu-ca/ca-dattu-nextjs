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
    if(!raw){
        return undefined;
    }
    const source = raw as SiteConfigSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<SiteConfig> = {
        sysId: source.sys.id,
        contentType: 'SiteConfig'
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.siteTitleTemplate) {
        target.siteTitleTemplate = fields.siteTitleTemplate as string;
    }
    if (fields.siteTitleDefault) {
        target.siteTitleDefault = fields.siteTitleDefault as string;
    }
    if (fields.siteDescription) {
        target.siteDescription = fields.siteDescription as string;
    }
    return target as SiteConfig;
}