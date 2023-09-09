import {getServerSession, Session} from "next-auth";
import {nextAuthOptions} from "./options";

const getAuthSession = async ()  => {
    try{
        return await getServerSession(nextAuthOptions as any) as Session;
    }
    catch(err){
        console.error('Error getting session', err);
        return null;
    }
}

export {
    getAuthSession
}