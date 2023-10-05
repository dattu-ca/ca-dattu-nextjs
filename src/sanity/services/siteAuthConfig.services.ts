// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteAuthConfig} from "~/models";

export const fetchBySlug = async (slug: string): Promise<SiteAuthConfig> => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteAuthConfig" && slug.current==$slug][0]{
                "sysId": _id,
                loginTitle,
                loginButton,
                logoutTitle,
                logoutButton,
                errorTitle,
                errorButton
            }`,
            {slug} as RequestInit
        )
        return {
            cmsSource: 'Sanity',
            contentType: 'SiteAuthConfig',
            sysId: response.sysId as string,
            slug,
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