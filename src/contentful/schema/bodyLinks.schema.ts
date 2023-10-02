import {ILink, BodyLinks} from "~/models";
import {IBodyLinksFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type BodyLinksSkeleton = IBaseSkeleton<'bodyLinks', IBodyLinksFields>

const mapLinks = (source: ILink[]): ILink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapLinks(item.links as ILink[]) : [],
}));

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BodyLinksSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<BodyLinks> = {
        sysId: source.sys.id,
        contentType: 'BodyLinks',
    };
    if (fields) {
        if (fields.name) {
            target.name = fields.name as string;
        }
        if (fields.links && Array.isArray(fields.links)) {
            target.links = mapLinks(fields.links)
        }
    }
    return target as BodyLinks;
}

