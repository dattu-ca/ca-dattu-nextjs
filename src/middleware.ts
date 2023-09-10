import {NextRequest, NextResponse} from "next/server";

export {default} from 'next-auth/middleware';

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*'
    ]
}

export const middleware = (request: NextRequest) => {
    
    return NextResponse.next();
}