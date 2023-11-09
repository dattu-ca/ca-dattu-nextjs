import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from 'next/cache';
import {parseBody} from 'next-sanity/webhook'
import {SERVER_CONFIG} from "~/utils/config.server";

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get('token');
    if (token !== SERVER_CONFIG.SERVER_CONSTANTS.REVALIDATE_TOKEN) {
        const message = 'Invalid signature'
        return NextResponse.json({error: JSON.stringify({message})}, {status: 401})
    }

    revalidatePath('/', 'layout');
    // revalidatePath('/author/[slug]');
    // revalidatePath('/author/[slug]/posts/[currentPageNumber]');
    // revalidatePath('/category/[slug]/[currentPageNumber]');
    // revalidatePath('/page/[slug]');
    // revalidatePath('/post/[slug]');
    // revalidatePath('/posts/[currentPageNumber]');
    // revalidatePath('/series/[slug]');
    // revalidatePath('/tag/[slug]/[currentPageNumber]');
    // revalidatePath('/tags');

    return NextResponse.json({
        revalidated: true,
    });
}

export async function POST(req: NextRequest) {
    try {
        const {isValidSignature, body} = await parseBody<{ _type: any }>(
            req,
            SERVER_CONFIG.SERVER_CONSTANTS.REVALIDATE_TOKEN,
        )

        if (!isValidSignature) {
            const message = 'Invalid signature'
            return NextResponse.json({error: JSON.stringify({message, isValidSignature, body})}, {status: 401})
        }

        if (!body?._type) {
            const message = 'Bad Request'
            return NextResponse.json({error: JSON.stringify({message, body})}, {status: 400})
        }

        revalidatePath('/', 'layout');
        // revalidatePath('/author/[slug]');
        // revalidatePath('/author/[slug]/posts/[currentPageNumber]');
        // revalidatePath('/category/[slug]/[currentPageNumber]');
        // revalidatePath('/page/[slug]');
        // revalidatePath('/post/[slug]');
        // revalidatePath('/posts/[currentPageNumber]');
        // revalidatePath('/series/[slug]');
        // revalidatePath('/tag/[slug]/[currentPageNumber]');
        // revalidatePath('/tags');

        return NextResponse.json({body})
    } catch (err: any) {
        console.error(err)
        return new Response(err.message, {status: 500})
    }
}