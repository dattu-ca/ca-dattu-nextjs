// ./src/app/api/revalidate/route.ts
import {revalidateTag} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'
import {parseBody} from 'next-sanity/webhook'
import {SERVER_CONFIG} from "~/utils/config.server";

export async function POST(req: NextRequest) {
    console.log("API POST > REVALIDATE", req);
    try {
        const {isValidSignature, body} = await parseBody<{_type: any}>(
            req,
            SERVER_CONFIG.SANITY.SANITY_REVALIDATE_SECRET
        )

        if (!isValidSignature) {
            const message: string = 'Invalid signature'
            return new Response(JSON.stringify({message, isValidSignature, body}), {status: 401})
        }

        if (!body?._type) {
            const message: string = 'Bad Request'
            return new Response(JSON.stringify({message, body}), {status: 400})
        }

        // If the `_type` is `page`, then all `client.fetch` calls with
        // `{next: {tags: ['page']}}` will be revalidated
        revalidateTag(body._type)

        return NextResponse.json({body})
    } catch (err) {
        console.error(err)
        // @ts-ignore
        return new Response(err.message, {status: 500})
    }
}