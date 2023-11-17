'use server';
import dbConnect from "../dbConnect";
import {insertInto as insertIntoUserProfile} from "~/services.db/user";
import {AuthProfileModel, AuthProviderModel} from './schema';

interface IAuthProvider {
    provider?: string | undefined;
    providerAccountId?: string | undefined;
}

interface IUserProfile {
    name?: string | undefined;
    givenName?: string | undefined;
    familyName?: string | undefined;
    email?: string | undefined;
}

interface IProps {
    authProvider: IAuthProvider,
    userProfile: IUserProfile
}

const fetchAuthProviderByProviderAndProviderAccountId = async (authProvider: IAuthProvider) => {
    await dbConnect();
    try{
        console.log('authProvider', authProvider)
        const result = await AuthProviderModel.findOne({
            provider: authProvider.provider,
            providerAccountId: authProvider.providerAccountId
        });
        console.log('result', result);
        return result;
    }
    catch(e){
        console.error(e);
    }
    return null;
}


const signIn = async ({authProvider, userProfile}: IProps) => {
    await dbConnect();
    try {
        const found = await fetchAuthProviderByProviderAndProviderAccountId(authProvider);
        if (!found) {
            const newAuthProfile = new AuthProfileModel();
            const savedAuthProfile = await newAuthProfile.save();

            await insertIntoUserProfile({userProfile, authProfileId: savedAuthProfile.id})

            const newAuthProvider = new AuthProviderModel({
                provider: authProvider.provider,
                providerAccountId: authProvider.providerAccountId,
                authProfile: savedAuthProfile.id
            });
            const savedAuthProvider = await newAuthProvider.save();

            return savedAuthProvider?.id
        } else {
            return found.id
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}

const fetchAuthProfileIdFromProviderData = async (provider: string, providerAccountId: string) => {
    const found = await AuthProviderModel.findOne({
        provider: provider,
        providerAccountId: providerAccountId
    });
    if (found) {
        return {
            authProviderId: found.id,
            authProfileId: found.authProfile
        };
    }
    return null;
}

export {
    signIn,
    fetchAuthProfileIdFromProviderData
}