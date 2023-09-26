import {BodyYoutube} from "~/models";
import {IBodyYouTubeFields} from "./generated/index";

export type BodyYoutubeSkeleton = {
    contentTypeId: 'bodyYoutube';
    fields: IBodyYouTubeFields;
    sys: {
        id: string;
    };
}

export const mapContentful = (raw: any) => {
    const source = raw as BodyYoutubeSkeleton;
    const fields = source.fields;
    const result: Partial<BodyYoutube> = {
        sysId: source.sys.id,
        contentType: 'BodyYoutube'
    };
    if (fields.name) {
        result.name = fields.name as string;
    }
    if (fields.videoId) {
        result.videoId = fields.videoId as string;
    }
    if (fields.description) {
        result.description = fields.description as object;
    }
    return result as BodyYoutube;
}