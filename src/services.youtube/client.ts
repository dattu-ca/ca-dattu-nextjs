import {google} from "googleapis";
import {SERVER_CONFIG} from "~/utils/config.server";

export const YoutubeClient = google.youtube({
    version: "v3",
    auth: SERVER_CONFIG.YOUTUBE_API.KEY
});