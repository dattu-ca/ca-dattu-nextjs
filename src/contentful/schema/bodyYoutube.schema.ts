import {BodyYouTube as BodyYouTube} from "~/models";
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
    const target: Partial<BodyYouTube> = {
        cmsSource: 'Contentful',
        sysId: source.sys.id,
        contentType: 'BodyYouTube'
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
    return target as BodyYouTube;
}