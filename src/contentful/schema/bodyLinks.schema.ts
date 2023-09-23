import {ILink, IBodyLinks} from "~/models";
import {IBodyLinksFields} from "./generated/index";

export type BodyLinksSkeleton = {
    fields: IBodyLinksFields;
}

const mapLinks = (source: ILink[]): ILink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapLinks(item.links as ILink[]) : [],
}));

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BodyLinksSkeleton;
    const target: Partial<IBodyLinks> = {};
    if (source.fields) {
        if (source.fields.links && Array.isArray(source.fields.links)) {
            target.links = mapLinks(source.fields.links)
        }
    }
    return target as IBodyLinks;
}

