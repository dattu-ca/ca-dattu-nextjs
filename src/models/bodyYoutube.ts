export interface BodyYoutube {
    sysId?: string | undefined;
    contentType: 'BodyYoutube';
    youTubeUrl: string;
    videoId: string;
    name?: string | undefined;
    description?: object | undefined;
}