import {BodyImage} from "~/models";

export const mapSanity = (raw: any) => {
    console.log('raw', raw)
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyLinks',
        sysId: raw.sysId as string,
        align: raw.align as "left" | "right" | "center",
        maxWidth: raw.maxWidth,
        maxHeight: raw.maxHeight,
        name: raw.name as string,
        desktopImage: {
            url: raw.desktopImage?.url,
            alt: raw.desktopImage?.alt,
        }
    } as BodyImage;
}