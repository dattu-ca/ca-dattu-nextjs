import {BodyImage, IImage} from "~/models";

export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyImage',
        sysId: raw.sysId as string,
        align: raw.align as "left" | "right" | "center",
        maxWidth: raw.maxWidth !== 'none' ? raw.maxWidth as number : undefined,
        maxHeight: raw.maxHeight !== 'none' ? raw.maxHeight as number : undefined,
        name: raw.name as string,
        border: raw.border as boolean ?? false,
        shadow: raw.shadow as boolean ?? false,
        shape: raw.shape as string ?? '',
        desktopImage: {
            url: raw.desktopImage?.url as string,
            alt: (raw.desktopImage?.alt || raw.desktopImage?.caption) as string,
        } as IImage,
        mobileImage: {
            url: raw.mobileImage?.url as string,
            alt: (raw.mobileImage?.alt || raw.mobileImage?.caption || raw.desktopImage?.alt || raw.desktopImage?.caption) as string,
        } as IImage
    } as BodyImage;
}