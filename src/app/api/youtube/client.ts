import {google} from "googleapis";

export const YoutubeClient = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY
});