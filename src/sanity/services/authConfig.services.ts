'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {AuthConfig} from "~/models";

export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="authConfig"]{
                "sysId": _id,
                loginTitle,
                loginButton,
                logoutTitle,
                logoutButton,
                errorTitle,
                errorButton
            }`
        )
        if (response.length === 1) {
            const item = response[0]
            return item as AuthConfig;
        } else {
            throw new Error(`Found multiple content for [slug]=${slug}`)
        }
    } catch (e) {
        console.log(e);
        throw new Error(e);
        // throw new Error(`Cannot find content for [slug]=${slug}`)
    }


}