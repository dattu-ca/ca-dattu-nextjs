'use server';
import { BodyYouTube } from "~/models";



export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyYouTube',
        sysId: raw.sysId as string,
        name: raw.name as string,
        videoId: raw.videoId as string,
        youTubeUrl: raw.youTubeUrl as string,
        description: raw.description as object,
    } as BodyYouTube;
}