'use server';
import {BodyLinks, ILink} from "~/models";


const mapLinks = (source: any[]): ILink[] => source.map(item => ({
    ...item,
    links: item.links && Array.isArray(item.links) ? mapLinks(item.links) : [],
}));

export const mapSanity = (raw: any) => {
    const field = raw?.links;
    const links = field?.links ? JSON.parse(field.links) : [];
    const target: BodyLinks = {
        cmsSource: 'Sanity',
        contentType: 'BodyLinks',
        sysId: raw?.sysId as string,
        displayName: raw?.displayName as string,
        links: mapLinks(links?.links || [])
    };
    return target;
}