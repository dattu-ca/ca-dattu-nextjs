// @ts-nocheck
'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {SiteConfig} from "~/models";

export const fetchBySlug = async (slug: string) => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteConfig" && slug.current=="${slug}"]{
                "sysId": _id,
                "slug": slug.current,
                siteTitleTemplate,
                siteTitleDefault,
                siteDescription
            }`
        )
        if (response.length === 1) {
            const item = response[0];
            return {
                contentType: 'SiteConfig',
                sysId: item.sysId as string,
                slug,
                siteDescription: item.siteDescription as string,
                siteTitleDefault: item.siteTitleDefault as string,
                siteTitleTemplate: item.siteTitleTemplate as string
            } as SiteConfig;            
        } else {
            throw new Error(`Found multiple content for [slug]=${slug}`)
        }
    } catch (e) {
        console.log(e);
        throw new Error(e);
        // throw new Error(`Cannot find content for [slug]=${slug}`)
    }


}