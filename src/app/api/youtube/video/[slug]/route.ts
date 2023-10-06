import {NextRequest, NextResponse} from "next/server";
import {youtubeServices} from "~/services.youtube";

export async function GET(req: NextRequest, {params}: { params: { slug: string } }) {
    const slug = params.slug;

    try {

        const response = await youtubeServices.fetchVideo(slug);
        if (response) {
            return NextResponse.json(
                response,
                {
                    status: 200
                }
            );
        }
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
