import type {NextAuthOptions, Session} from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google";
import {JWT} from "next-auth/jwt";
import {SERVER_CONFIG} from "~/utils/config.server";
import {authDbServices} from "~/services.db";

interface ISession extends Session {
    authProfileId: string;
    authProviderId: string;
}

interface IToken extends JWT {
    authProfileId: string;
    authProviderId: string;
}

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: SERVER_CONFIG.GOOGLE_AUTH.CLIENT_ID,
            clientSecret: SERVER_CONFIG.GOOGLE_AUTH.CLIENT_SECRET,
        }),
        // GitHubProvider({
        //     clientId: SERVER_CONFIG.GITHUB_AUTH.ID,
        //     clientSecret: SERVER_CONFIG.GITHUB_AUTH.SECRET,
        // })
    ],
    callbacks: {
        signIn: ({user, account, profile, email, credentials}) => {
            try {
                if (!account?.provider || !account?.providerAccountId) {
                    return false;
                }

                const userProfile = {
                    name: '',
                    givenName: '',
                    familyName: '',
                    email: '',
                }
                const authProvider = {
                    provider: account?.provider?.toLowerCase(),
                    providerAccountId: account?.providerAccountId,

                };

                if (authProvider.provider === 'google') {
                    if (!SERVER_CONFIG.NEXT_AUTH_ALLOWED_IDS.GOOGLE.includes(account?.providerAccountId as string)) {
                        return false;
                    }
                    const p = profile as GoogleProfile;
                    userProfile.name = p.name;
                    userProfile.givenName = p.given_name;
                    userProfile.familyName = p.family_name;
                    userProfile.email = p.email;
                }
                // authDbServices.signIn({authProvider, userProfile}).then(r => r);
                return true;
            } catch (err) {
                console.error('Error in the signin callback', err);
            }

            return false;
        },
        jwt: async (params) => {
            const {token, account} = params;
            // if (account) {
            //     const result = await authDbServices.fetchAuthProfileIdFromProviderData(account.provider, account.providerAccountId);
            //     (token as IToken).authProfileId = result?.authProfileId;
            //     (token as IToken).authProviderId = result?.authProviderId;
            // }
            return token;
        },
        session: async ({session, token, user}) => {
            delete session.user;
            (session as ISession).authProfileId = (token as IToken).authProfileId;
            (session as ISession).authProviderId = (token as IToken).authProviderId;
            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/error',
        signOut: '/logout',
    }
}

