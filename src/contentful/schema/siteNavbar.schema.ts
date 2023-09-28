import {SiteNavbar} from "~/models";
import {ISiteNavbarFields} from "./generated/index";
import {mapContentful as mapBodyLinksContentful} from './bodyLinks.schema';
import {mapContentful as mapBodyImagesContentful} from './bodyImages.schema';
import {ISkeleton} from "./types";


export type SiteNavbarSkeleton = ISkeleton<'siteNavbar', ISiteNavbarFields>;


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
        target.links = mapBodyLinksContentful(fields.links);
    }
    if (fields.logo) {
        target.logo = mapBodyImagesContentful(fields.logo);
    }
    if (fields.openMenuText) {
        target.openMenuText = fields.openMenuText as string;
    }
    if (fields.closeMenuText) {
        target.closeMenuText = fields.closeMenuText as string;
    }
    return target as SiteNavbar;
}
