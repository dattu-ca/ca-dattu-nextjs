import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug;
    const paramGreeting = request.nextUrl.searchParams.get('greeting')
    const greeting = `${paramGreeting || 'Hello'} ${slug}!!!`
    const json = {
        greeting
    };
    return NextResponse.json(json);
}
