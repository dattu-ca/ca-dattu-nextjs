import {BaseModel} from "./types";

export interface BodyYouTube  extends BaseModel<'BodyYouTube'>{
    youTubeUrl: string;
    videoId: string;
    displayName?: string | undefined;
    description?: object | undefined;
}