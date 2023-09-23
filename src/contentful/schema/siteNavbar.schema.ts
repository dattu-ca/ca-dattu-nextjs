import {ISiteNavbar} from "~/models";
import {ISiteNavbarFields} from "./generated/index";
import {mapContentful as mapContentful_bodyLinks} from './bodyLinks.schema';
import {mapContentful as mapContentful_bodyImages} from './bodyImages.schema';


export type SiteNavbarSkeleton = {
    contentTypeId: 'siteNavbar';
    fields: ISiteNavbarFields;
}


export const mapContentful = (raw: any) => {
    const source = (raw as SiteNavbarSkeleton).fields;
    const target: Partial<ISiteNavbar> = {};
    if (source.slug) {
        target.slug = source.slug as string;
    }
    if (source.links) {
        target.links = mapContentful_bodyLinks(source.links);
    }
    if (source.logo) {
        target.logo = mapContentful_bodyImages(source.logo);
    }
    if (source.openMenuText) {
        target.openMenuText = source.openMenuText as string;
    }
    if (source.closeMenuText) {
        target.closeMenuText = source.closeMenuText as string;
    }
    return target as ISiteNavbar;
}
