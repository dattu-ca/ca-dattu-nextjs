import NextAuth from 'next-auth';
import { nextAuthOptions } from '~/auth.services';
const handler = NextAuth(nextAuthOptions);

export const maxDuration = 10;

export {
    handler as GET,
    handler as POST
}