export interface BodyYoutube {
    contentType: 'BodyYoutube';
    youTubeUrl: string;
    videoId: string;
    name?: string | undefined;
    description?: object | undefined;
}