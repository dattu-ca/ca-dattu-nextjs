import mongoose from "mongoose";
import {COLLECTIONS} from "../collectionNames";

const Schema = mongoose.Schema;

const authProfileSchema = new Schema({
    dateCreated: {
        type: Schema.Types.Date,
        default: Date.now(),
        required: true,
    },
})

const authProviderSchema = new Schema({
    dateCreated: {
        type: Schema.Types.Date,
        default: Date.now(),
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    providerAccountId: {
        type: String,
        required: true,
    },
    authProfile: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: COLLECTIONS.AUTH_PROFILE,
    }
});


export const AuthProfileModel = mongoose.models[COLLECTIONS.AUTH_PROFILE] || mongoose.model(COLLECTIONS.AUTH_PROFILE, authProfileSchema)
export const AuthProviderModel = mongoose.models[COLLECTIONS.AUTH_PROVIDER] || mongoose.model(COLLECTIONS.AUTH_PROVIDER, authProviderSchema)
