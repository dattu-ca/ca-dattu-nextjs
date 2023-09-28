'use server';
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
    return await AuthProviderModel.findOne({
        provider: authProvider.provider,
        providerAccountId: authProvider.providerAccountId
    });
}


const signIn = async ({authProvider, userProfile}: IProps) => {
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
        return found.id;
    }
    return null;
}

export {
    signIn,
    fetchAuthProfileIdFromProviderData
}