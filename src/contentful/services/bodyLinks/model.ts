import {ILink, IBodyLinks} from "~/models";
import {IBodyLinksFields} from "~/contentful/schema/generated";

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
    const item = raw as BodyLinksSkeleton;
    const result: Partial<IBodyLinks> = {};
    if (item.fields) {
        if (item.fields.links && Array.isArray(item.fields.links)) {
            result.links = mapLinks(item.fields.links)
        }
    }
    return result as IBodyLinks;
}