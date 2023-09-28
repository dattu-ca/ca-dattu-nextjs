import {BodyImage} from "~/models";
import {IBodyImagesFields} from "./generated/index";
import {ISkeleton} from "./types";

export type BodyImagesSkeleton = ISkeleton<'bodyImages', IBodyImagesFields>;

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BodyImagesSkeleton;
    const fields = source.fields;
    const target: Partial<BodyImage> = {
        sysId: source.sys.id,
        contentType: 'BodyImage',
        maxWidth: fields.maxWidth ?? 'auto',
        maxHeight: fields.maxWidth ?? 'auto',
        align: fields.align.toLowerCase() as ('left' | 'right' | 'center'),
    };
    target.desktopImage = {
        contentType: 'Image',
        url: fields.desktopImage?.fields?.file?.url as string,
        alt: (fields.desktopAltText || fields.desktopImage?.fields.title || fields.desktopImage?.fields.description) as string
    }
    target.mobileImage = {
        contentType: 'Image',
        url: fields.mobileImage?.fields?.file?.url as string,
        alt: (fields.mobileAltText || target.desktopImage.alt) as string
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