'use server';
import {BodyYouTube} from "~/models";


export const mapSanity = (raw: any) => {
    const target: BodyYouTube = {
        cmsSource: 'Sanity',
        contentType: 'BodyYouTube',
        sysId: raw.sysId as string,
        displayName: raw.displayName as string,
        videoId: raw.videoId as string,
        youTubeUrl: raw.youTubeUrl as string,
        description: raw.description as object,
    };
    return target;
}