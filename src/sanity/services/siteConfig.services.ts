// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteConfig} from "~/models";

export const fetchBySlug = async (slug: string): Promise<SiteConfig> => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteConfig" && slug.current==$slug][0]{
                "sysId": _id,
                "slug": slug.current,
                siteTitleTemplate,
                siteTitleDefault,
                siteDescription
            }`,
            {slug} as RequestInit
        )
        return {
            cmsSource: 'Sanity',
            contentType: 'SiteConfig',
            sysId: response.sysId as string,
            slug,
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