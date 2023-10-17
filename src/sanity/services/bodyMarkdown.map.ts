'use server';
import { BodyMarkdown } from "~/models";



export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyMarkdown',
        sysId: raw.sysId as string,
        name: raw.name as string,
        markdown: raw.markdown as string,
    } as BodyMarkdown;
}