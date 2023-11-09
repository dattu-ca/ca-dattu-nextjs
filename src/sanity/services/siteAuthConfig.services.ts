'use server';
import {groq} from "next-sanity";
import {client} from './client';
import {mapSanity} from "./siteAuthConfig.map";


export const fetch = async () => {
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
            }`,{
                useCdn: false,
            }, {
                next: {
                    revalidate: 60,
                    tags: ['layout', 'page']
                }
            }
        )
        return mapSanity(response);
    } catch (e) {
        console.error(`Cannot find [authPagesConfig] content`, e);
    }


}