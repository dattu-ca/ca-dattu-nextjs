import {BodyImage, IImage} from "~/models";

export const mapSanity = (raw: any) => {
    const target: BodyImage = {
        cmsSource: 'Sanity',
        contentType: 'BodyImage',
        sysId: raw.sysId as string,
        align: raw.align as "left" | "right" | "center",
        maxWidth: raw.maxWidth !== 'none' ? raw.maxWidth as number : undefined,
        maxHeight: raw.maxHeight !== 'none' ? raw.maxHeight as number : undefined,
        displayName: raw.displayName as string,
        border: raw.border as boolean ?? false,
        shadow: raw.shadow as boolean ?? false,
        shape: raw.shape as string ?? '',
        desktopImage: {
            url: raw.desktopImage?.url as string,
            alt: raw.desktopImage?.alt as string,
            caption: raw.desktopImage?.caption as string,
        } as IImage,
        mobileImage: {
            url: raw.mobileImage?.url as string,
            alt: (raw.mobileImage?.alt || raw.desktopImage?.alt) as string,
            caption: (raw.mobileImage?.caption || raw.desktopImage?.caption) as string,
        } as IImage,
        linkUrl: raw.linkUrl,
        linkTarget: raw.linkTarget ? '_blank' : '_self',
    }
    return target;
}