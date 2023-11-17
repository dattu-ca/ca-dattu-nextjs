'use server';
import {UserProfileModel} from './schema'
import dbConnect from "../dbConnect";


interface IUserProfile {
    name?: string | undefined;
    givenName?: string | undefined;
    familyName?: string | undefined;
    email?: string | undefined;
}

interface IProps {
    userProfile: IUserProfile;
    authProfileId: string;
}

const insertInto = async ({userProfile, authProfileId}: IProps) => {
    await dbConnect();
    try {
        const newUserProfile = new UserProfileModel({
            name: userProfile.name,
            givenName: userProfile.givenName,
            familyName: userProfile.familyName,
            email: userProfile.email,
            authProfile: authProfileId,
        });
        const result = await newUserProfile.save();
        return result?.id;


    } catch (e) {
        console.error(e);
    }

}

export {
    insertInto
}