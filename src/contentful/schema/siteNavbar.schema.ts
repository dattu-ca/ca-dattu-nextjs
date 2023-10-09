import {SiteNavbar} from "~/models";
import {ISiteNavbarFields} from "./generated/index";
import {mapContentful as mapBodyLinksContentful} from './bodyLinks.schema';
import {mapContentful as mapBodyImagesContentful} from './bodyImages.schema';
import {IBaseSkeleton} from "./types";


export type SiteNavbarSkeleton = IBaseSkeleton<'siteNavbar', ISiteNavbarFields>;


export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as SiteNavbarSkeleton;
    const fields = source.fields;
    if (!fields) {
        return undefined;
    }
    const target: Partial<SiteNavbar> = {
        cmsSource: 'Contentful',
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
