'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity as mapBodyFormSanity} from './bodyForm.map';



export const fetchByFormId = async (formId: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="bodyForm" && formId == $formId][0]{
                    "sysId": _id,
                    "slug": slug.current,
                    name,
                    formId,
                    submitFormEnabled,
                    recaptchaEnabled,
                    sendEmailEnabled,
                    successMessage,
                    failureMessage,
                    fromEmailKey,
                    formModel,                    
                  }`,
            {
                formId: formId,
                cache: 'no-cache',
                useCdn: false,
                next: {
                    revalidate: 0
                }
            }
        )
        return mapBodyFormSanity(response);
    } catch (e) {
        console.error(`Cannot find [bodyForm] for formId=${formId}`, e);
    }


}