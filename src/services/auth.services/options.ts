import type {NextAuthOptions, Session} from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import {JWT} from "next-auth/jwt";


interface ISession extends Session{
    provider: string;
}
interface IToken extends JWT{
    provider: string;
}

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'Your username'
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: ''
                },
            },
            authorize: async (param) => {
                const user = {id: '42', name: 'dattu', password: 'nextauth'};

                const credentials = param as Record<string, string>;
                
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        signIn: async ({user, account, profile, email, credentials}) => {
            console.log(' ------- signIn START -------')
            console.log(user, account, profile, email, credentials)
            console.log(' ------- signIn END -------')
            return true;
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
        }
    }
}

