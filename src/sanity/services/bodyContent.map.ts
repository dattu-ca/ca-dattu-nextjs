'use server';
import {BodyContent} from "~/models";


export const mapSanity = (raw: any) => {
    const target: BodyContent = {
        cmsSource: 'Sanity',
        contentType: 'BodyContent',
        sysId: raw.sysId as string,
        displayName: raw.displayName as string,
        body: raw.description as object,
    }
    return target;
}