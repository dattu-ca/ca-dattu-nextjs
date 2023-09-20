import mongoose from "mongoose";
import {COLLECTIONS} from "../collectionNames";

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    environment: {
        type: String,
        default: process.env.ENVIRONMENT,
        required: true,
        trim: true,
        lowerCase: true,
    },
    dateCreated: {
        type: Schema.Types.Date,
        default: Date.now(),
        required: true,
    },
    name: {
        type: String,
        required: false,
        trim: true,
    },
    givenName: {
        type: String,
        required: false,
        trim: true,
    },
    familyName: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        trim: true,
    },
    authProfile: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: COLLECTIONS.AUTH_PROFILE,
    }
})



export const UserProfileModel = mongoose.models[COLLECTIONS.USER_PROFILE] || mongoose.model(COLLECTIONS.USER_PROFILE, userProfileSchema)
