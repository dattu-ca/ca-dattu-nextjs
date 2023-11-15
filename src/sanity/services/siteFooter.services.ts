'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity} from "./siteFooter.map";

export const fetch = async () => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteFooter"][0]{
                    "sysId": _id,
                    "slug": _type,
                    copyright,
                    links -> {
                      "sysId": _id,
                      "slug": slug.current,
                      name,
                      links
                    }
                }`,
            {
                useCdn: false,
            }, {
                next: {
                    tags: ['layout', 'page']
                }
            }
        )
        return mapSanity(response);
    } catch (e) {
        console.error(`Cannot find [siteFooter] content`, e);
    }


}