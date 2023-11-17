'use server';
import {BodyCode} from "~/models";


export const mapSanity = (raw: any) => {
    const target: BodyCode = {
        cmsSource: 'Sanity',
        contentType: 'BodyCode',
        sysId: raw.sysId as string,
        displayName: raw.displayName as string,
        code: raw.code?.code as string,
        language: raw.code?.language as string
    };
    return target;
}