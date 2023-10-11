// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteConfig} from "~/models";

export const fetchBySlug = async (): Promise<SiteConfig> => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteConfig"][0]{
                "sysId": _id,
                "slug": _type,
                siteTitleTemplate,
                siteTitleDefault,
                siteDescription
            }`
        )


        
        
        return {
            cmsSource: 'Sanity',
            contentType: 'SiteConfig',
            sysId: response.sysId as string,
            slug: response.slug as string,
            siteDescription: response.siteDescription as string,
            siteTitleDefault: response.siteTitleDefault as string,
            siteTitleTemplate: response.siteTitleTemplate as string
        } as SiteConfig;
    } catch (e) {
        console.log(e);
        throw new Error(e);
        // throw new Error(`Cannot find content for [slug]=${slug}`)
    }


}