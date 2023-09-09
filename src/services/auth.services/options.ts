import type {NextAuthOptions} from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';

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
            authorize: async (credentials) => {
                // This is where you need to retrieve the user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = {id: '42', name: 'dattu', password: 'nextauth'};
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        signIn: async ({ user, account, profile, email, credentials }) => {
            console.log(' ------- signIn START -------')
            console.log(user, account, profile, email, credentials)
            console.log(' ------- signIn END -------')
            //110936461031997432633
            //116270128896816715755
          return true;  
        },
        jwt: async (params) => {
            const { account} = params;
            if(account){
                params.token.provider = account.provider;
            }
            return params.token;
        },
        session: async ({session, token, user}) => {
            session.provider = token.provider;
            return session
        }

    }
}