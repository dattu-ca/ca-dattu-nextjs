import {ILink, BodyLinks} from "~/models";
import {IBodyLinksFields} from "./generated/index";

export type BodyLinksSkeleton = {
    fields: IBodyLinksFields;
    sys: {
        id: string;
    };
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
    const fields = source.fields;
    const target: Partial<BodyLinks> = {
        sysId: source.sys.id,
        contentType: 'BodyLinks',
    };
    if (fields) {
        if (fields.links && Array.isArray(fields.links)) {
            target.links = mapLinks(fields.links)
        }
    }
    return target as BodyLinks;
}

