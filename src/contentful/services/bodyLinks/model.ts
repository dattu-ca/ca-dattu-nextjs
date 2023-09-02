import {ILink, IBodyLinks} from "~/models";
import {Entry} from "contentful";

export type BodyLinksSkeleton = {
    fields: IBodyLinks;
}

const mapLinks = (source: ILink[]): ILink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapLinks(item.links as ILink[]) : [],
}));

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const item = raw as Entry<BodyLinksSkeleton, undefined, string>;
    const result: Partial<IBodyLinks> = {};
    if (item.fields) {
        if (item.fields.links && Array.isArray(item.fields.links)) {
            result.links = mapLinks(item.fields.links)
        }
    }
    return result as IBodyLinks;
}