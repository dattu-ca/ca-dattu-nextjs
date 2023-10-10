// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteAuthConfig} from "~/models";

export const fetchBySlug = async (): Promise<SiteAuthConfig> => {
    try {
        const response = await client.fetch(
            groq`*[_type=="authPagesConfig"][0]{
                "sysId": _id,
                "slug": _type,
                loginTitle,
                loginButton,
                logoutTitle,
                logoutButton,
                errorTitle,
                errorButton
            }`
        )
        
        return {
            cmsSource: 'Sanity',
            contentType: 'SiteAuthConfig',
            sysId: response.sysId as string,
            slug: response.slug as string,
            loginTitle: response.loginTitle as string,
            loginButton: response.loginButton as string,
            logoutTitle: response.logoutTitle as string,
            logoutButton: response.logoutButton as string,
            errorTitle: response.errorTitle as string,
            errorButton: response.errorButton as string,
        } as SiteAuthConfig;
    } catch (e) {
        console.log(e);
        throw new Error(e);
        // throw new Error(`Cannot find content for [slug]=${slug}`)
    }


}