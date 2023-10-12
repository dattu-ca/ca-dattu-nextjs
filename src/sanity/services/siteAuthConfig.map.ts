'use server';
import {SiteAuthConfig} from "~/models";

export const mapSanity = (raw: any): SiteAuthConfig => {
    return {
        cmsSource: 'Sanity',
        contentType: 'SiteAuthConfig',
        sysId: raw.sysId as string,
        slug: raw.slug as string,
        loginTitle: raw.loginTitle as string,
        loginButton: raw.loginButton as string,
        logoutTitle: raw.logoutTitle as string,
        logoutButton: raw.logoutButton as string,
        errorTitle: raw.errorTitle as string,
        errorButton: raw.errorButton as string,
    } as SiteAuthConfig;
}