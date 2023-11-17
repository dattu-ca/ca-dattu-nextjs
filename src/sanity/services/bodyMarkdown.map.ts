'use server';
import {BodyMarkdown} from "~/models";


export const mapSanity = (raw: any) => {
    const target: BodyMarkdown = {
        cmsSource: 'Sanity',
        contentType: 'BodyMarkdown',
        sysId: raw.sysId as string,
        displayName: raw.displayName as string,
        markdown: raw.markdown as string,
    }
    return target;
}