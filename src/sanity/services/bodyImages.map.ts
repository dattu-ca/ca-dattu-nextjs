import {BodyImage, IImage} from "~/models";

export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyImage',
        sysId: raw.sysId as string,
        align: raw.align as "left" | "right" | "center",
        maxWidth: raw.maxWidth as number,
        maxHeight: raw.maxHeight as number,
        name: raw.name as string,
        desktopImage: {
            url: raw.desktopImage?.url as string,
            alt: raw.desktopImage?.alt as string,
        } as IImage,
        mobileImage: {
            url: raw.mobileImage?.url as string,
            alt: raw.mobileImage?.alt as string,
        } as IImage
    } as BodyImage;
}