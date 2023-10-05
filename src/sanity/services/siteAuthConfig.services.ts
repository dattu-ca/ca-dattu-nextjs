// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteAuthConfig} from "~/models";

export const fetchBySlug = async (slug: string): Promise<SiteAuthConfig> => {
    try {
        const response = await client.fetch(
            groq`*[_type=="authConfig" && slug.current=="${slug}"]{
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
            const item = response[0];
            return {
                contentType: 'SiteAuthConfig',
                sysId: item.sysId as string,
                slug,
                loginTitle: item.loginTitle as string,
                loginButton: item.loginButton as string,
                logoutTitle: item.logoutTitle as string,
                logoutButton: item.logoutButton as string,
                errorTitle: item.errorTitle as string,
                errorButton: item.errorButton as string,
            } as SiteAuthConfig;
        } else {
            throw new Error(`Found multiple content for [slug]=${slug}`)
        }
    } catch (e) {
        console.log(e);
        throw new Error(e);
        // throw new Error(`Cannot find content for [slug]=${slug}`)
    }


}