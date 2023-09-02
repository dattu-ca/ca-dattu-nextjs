import {IImage, IBodyImage} from "~/models";
import {Entry} from "contentful";
import {IBodyImagesFields} from "~/contentful/schema/generated";

export type BodyImagesSkeleton = {
    fields: IBodyImagesFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const item = (raw as BodyImagesSkeleton).fields;
    const result: Partial<IBodyImage> = {};
    result.desktopImage = {
        url: item.desktopImage?.fields?.file?.url as string,
        alt: (item.desktopAltText || item.desktopImage?.fields.title || item.desktopImage?.fields.description) as string
    }
    result.mobileImage = {
        url: item.mobileImage?.fields?.file?.url as string,
        alt: (item.mobileAltText || result.desktopImage.alt) as string
    }
    return result as IBodyImage;

}

export const mapContentfulList = (raw: any) => {
    if (!raw || !Array.isArray(raw)) {
        return [] as IBodyImage[]
    }
    const items = raw as any[];
    return items.map(item => mapContentful(item)).filter(item => item) as IBodyImage[];
}