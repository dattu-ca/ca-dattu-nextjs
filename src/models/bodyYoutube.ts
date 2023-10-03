import {BaseModel} from "./types";

export interface BodyYoutube  extends BaseModel<'BodyYoutube'>{
    youTubeUrl: string;
    videoId: string;
    name?: string | undefined;
    description?: object | undefined;
}