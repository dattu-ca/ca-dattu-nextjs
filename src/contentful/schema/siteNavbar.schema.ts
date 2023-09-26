import {SiteNavbar} from "~/models";
import {ISiteNavbarFields} from "./generated/index";
import {mapContentful as mapContentful_bodyLinks} from './bodyLinks.schema';
import {mapContentful as mapContentful_bodyImages} from './bodyImages.schema';


export type SiteNavbarSkeleton = {
    contentTypeId: 'siteNavbar';
    fields: ISiteNavbarFields;
    sys: {
        id: string;
    };
}


export const mapContentful = (raw: any) => {
    const source = raw as SiteNavbarSkeleton;
    const fields = source.fields;
    const target: Partial<SiteNavbar> = {
        sysId: source.sys.id,
        contentType: 'SiteNavbar'
    };
    if (fields.slug) {
        target.slug = fields.slug as string;
    }
    if (fields.links) {
        target.links = mapContentful_bodyLinks(fields.links);
    }
    if (fields.logo) {
        target.logo = mapContentful_bodyImages(fields.logo);
    }
    if (fields.openMenuText) {
        target.openMenuText = fields.openMenuText as string;
    }
    if (fields.closeMenuText) {
        target.closeMenuText = fields.closeMenuText as string;
    }
    return target as SiteNavbar;
}
