import {NextRequest, NextResponse} from "next/server";
import {revalidateTag, revalidatePath} from 'next/cache';

export async function GET(request: NextRequest) {
    revalidatePath('/page/[slug]');

    return NextResponse.json({
        revalidated: true,
    });
}