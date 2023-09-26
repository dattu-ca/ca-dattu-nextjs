import {BodyImage} from "~/models";
import {IBodyImagesFields} from "./generated/index";

export type BodyImagesSkeleton = {
    fields: IBodyImagesFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodyImagesSkeleton).fields;
    const target: Partial<BodyImage> = {
        contentType: 'BodyImage',
        maxWidth: source.maxWidth ?? 'auto',
        maxHeight: source.maxWidth ?? 'auto',
        align: source.align.toLowerCase() as ('left' | 'right' | 'center'),
    };
    target.desktopImage = {
        contentType: 'Image',
        url: source.desktopImage?.fields?.file?.url as string,
        alt: (source.desktopAltText || source.desktopImage?.fields.title || source.desktopImage?.fields.description) as string
    }
    target.mobileImage = {
        contentType: 'Image',
        url: source.mobileImage?.fields?.file?.url as string,
        alt: (source.mobileAltText || target.desktopImage.alt) as string
    }
    return target as BodyImage;

}

export const mapContentfulList = (raw: any) => {
    if (!raw || !Array.isArray(raw)) {
        return [] as BodyImage[]
    }
    const source = raw as any[];
    return source.map(item => mapContentful(item)).filter(item => item) as BodyImage[];
}