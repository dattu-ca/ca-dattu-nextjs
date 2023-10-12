'use server';
import {youtube_v3} from "googleapis";
import {YoutubeClient} from "./client";

export const fetchVideo = async (slug: string) => {    
    const yParams: youtube_v3.Params$Resource$Videos$List = {
        part: ["snippet", "recordingDetails"],
        id: [slug as string]
    }
    try {
        const response = await YoutubeClient.videos.list(yParams);
        return response?.data;
    } catch (e) {
        console.error(e);
    }
    return undefined;
}