import {BodyYoutube} from "~/models";
import {IBodyYouTubeFields} from "./generated/index";

export type BodyYoutubeSkeleton = {
    contentTypeId: 'bodyYoutube'
    fields: IBodyYouTubeFields
}

export const mapContentful = (raw: any) => {
    const source = (raw as BodyYoutubeSkeleton).fields;
    const result: Partial<BodyYoutube> = {
        contentType: 'BodyYoutube'
    };
    if (source.name) {
        result.name = source.name as string;
    }
    if (source.videoId) {
        result.videoId = source.videoId as string;
    }
    if (source.description) {
        result.description = source.description as object;
    }
    return result as BodyYoutube;
}