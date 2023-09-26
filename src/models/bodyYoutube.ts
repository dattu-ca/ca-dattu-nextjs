export interface IBodyYoutube {
    contentType: 'BodyYoutube';
    youTubeUrl: string;
    videoId: string;
    name?: string | undefined;
    description?: object | undefined;
}