import {NextRequest, NextResponse} from "next/server";
import {youtube_v3} from "googleapis";
import {YoutubeClient} from "../../client";

export async function GET(req: NextRequest, {params}: { params: { slug: string } }) {
    const slug = params.slug;
    const yParams: youtube_v3.Params$Resource$Videos$List = {
        part: ["snippet", "recordingDetails"],
        id: [slug as string]
    }
    try {

        const response = await YoutubeClient.videos.list(yParams);


        return NextResponse.json(
            {
                data: response?.data,
            },
            {
                status: 200
            }
        );
    } catch (e) {
        console.error(e);
    }
    return NextResponse.json(
        {
            message: 'error'
        }, {
            status: 500
        }
    );

}
