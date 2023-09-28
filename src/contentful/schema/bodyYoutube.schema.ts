import {BodyYoutube} from "~/models";
import {IBodyYouTubeFields} from "./generated/index";
import {ISkeleton} from "./types";

export type BodyYoutubeSkeleton = ISkeleton<'bodyYoutube', IBodyYouTubeFields>;

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