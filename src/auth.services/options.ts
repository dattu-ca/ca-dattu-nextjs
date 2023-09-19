import type {NextAuthOptions, Session} from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google";
import {JWT} from "next-auth/jwt";
import {SERVER_CONFIG} from "~/utils/config.server";
import {authDbServices} from "~/services.db";


interface ISession extends Session {
    provider: string;
}

interface IToken extends JWT {
    provider: string;
}

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks: {
        signIn: async ({user, account, profile, email, credentials}) => {
            try {
                // console.log(' ------- signIn START -------')
                // console.log(user, account, profile, email, credentials)
                // console.log(' ------- signIn END -------')
                if (!account?.provider || !account?.providerAccountId) {
                    return false;
                }


                const provider = account?.provider;

                let authProfile = {};
                const authProvider = {
                    provider,
                    providerAccountId: account?.providerAccountId,

                };

                if (provider?.toLowerCase() === 'google') {
                    if (!SERVER_CONFIG.NEXT_AUTH_ALLOWED_IDS.GOOGLE.includes(account?.providerAccountId as string)) {
                        return false;
                    }
                    const p = profile as GoogleProfile;
                    authProfile = {
                        name: p.name,
                        givenName: p.given_name,
                        familyName: p.family_name,
                    };
                    // const result = await authDbServices.signIn({authProvider, authProfile});
                    // console.log("RESULT", result)

                }
            } catch (err) {
                console.error('Error in the signin callback', err);
            }

            return false;
        },
        jwt: async (params) => {
            const {token, account} = params;
            if (account) {
                (token as IToken).provider = account.provider;
            }
            return token;
        },
        session: async ({session, token, user}) => {
            (session as ISession).provider = (token as IToken).provider;
            return session
        },
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
        signOut: '/auth/logout',
    }
}

