import {BodyYoutube} from "~/models";
import {IBodyYouTubeFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type BodyYoutubeSkeleton = IBaseSkeleton<'bodyYoutube', IBodyYouTubeFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as BodyYoutubeSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<BodyYoutube> = {
        sysId: source.sys.id,
        contentType: 'BodyYoutube'
    };
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.videoId) {
        target.videoId = fields.videoId as string;
    }
    if (fields.description) {
        target.description = fields.description as object;
    }
    return target as BodyYoutube;
}