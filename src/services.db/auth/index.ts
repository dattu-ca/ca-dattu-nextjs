'use server';
import {AuthProfileModel, AuthProviderModel} from './schema';

interface IAuthProviderProps {
    provider: string | undefined;
    providerAccountId: string | undefined;
}

interface IAuthProfileProps {
    name: string;
    giveName: string;
    familyName: string;
    email: string;
}



const signIn = async (authProviderProp: IAuthProviderProps, authProfileProp: IAuthProfileProps) => {
    try {
        const found = await AuthProviderModel.findOne({
            provider: authProviderProp.provider,
            providerAccountId: authProviderProp.providerAccountId
        });
        if (!found) {
            const authProfile = new AuthProfileModel();
            const savedProfile = await authProfile.save();
            const authProvider = new AuthProviderModel({
                provider: authProviderProp.provider,
                providerAccountId: authProviderProp.providerAccountId,
                authProfile: savedProfile.id
            })
            const savedProvider = await authProvider.save();
            return savedProvider.id
        }
        else{
            return found.id
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}

const fetchAuthProfileIdFromProviderData = async (provider : string, providerAccountId: string) =>{
    const found = await AuthProviderModel.findOne({
        provider: provider,
        providerAccountId: providerAccountId
    });
    if(found){
        return found.id;
    }
    return null;
}

export {
    signIn,
    fetchAuthProfileIdFromProviderData
}