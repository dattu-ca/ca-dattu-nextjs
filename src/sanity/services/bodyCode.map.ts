'use server';
import { BodyCode } from "~/models";



export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyCode',
        sysId: raw.sysId as string,
        name: raw.name as string,
        code: raw.code as string,
    } as BodyCode;
}