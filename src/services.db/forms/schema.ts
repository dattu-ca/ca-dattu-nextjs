import mongoose from "mongoose";
import {COLLECTIONS} from "../collectionNames";


const Schema = mongoose.Schema;


const formSubmissionSchema = new Schema({
    dateCreated:{
        type: Schema.Types.Date,
        default: Date.now(),
        required: true,
    },
    formId: {
        type: String,
        required: true,
        trim: true,
    },
    formModel: {
        type: Schema.Types.Mixed,
        required: true
    },
    formValues: {
        type: Schema.Types.Mixed,
        required: true
    },
});


export const FormSubmissionsModel = mongoose.models[COLLECTIONS.FORM_SUBMISSION] || mongoose.model(COLLECTIONS.FORM_SUBMISSION, formSubmissionSchema)
