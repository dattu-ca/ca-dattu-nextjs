'use server';
import { BodyContent } from "~/models";



export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyContent',
        sysId: raw.sysId as string,
        name: raw.name as string,
        body: raw.description as object,
    } as BodyContent;
}