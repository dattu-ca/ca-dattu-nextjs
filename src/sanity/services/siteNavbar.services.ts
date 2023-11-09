'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity} from "./siteNavbar.map";

export const fetch = async () => {
    try {
        const response = await client.fetch(
            groq`*[_type=="siteNavbar"][0]{
                    "sysId": _id,
                    "slug": _type,
                    openMenuText,
                    closeMenuText,
                    logo ->{
                      "sysId": _id,
                      "slug": slug.current,
                      name,
                      maxWidth,
                      maxHeight,
                      align,
                      "desktopImage": {
                          "caption": desktopImage.caption,
                          "alt" : desktopImage.alt,
                          "url": desktopImage.asset -> url
                      },
                      "mobileImage": {
                          "caption": mobileImage.caption,
                          "alt" : mobileImage.alt,
                          "url": mobileImage.asset -> url
                      },
                    },
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
                    revalidate: 60
                }
            }
        )
        return mapSanity(response);
    } catch (e) {
        console.error(`Cannot find [siteNavbar] content`, e);
    }


}