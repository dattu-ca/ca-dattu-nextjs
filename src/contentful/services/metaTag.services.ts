import {client} from "../client";
import {MetaTagSkeleton, mapContentful} from '../schema/metaTag.schema'
import {MetaTag} from "~/models";


const CONTENTFUL_META_TAG_FIELDS = {
    SLUG: 'fields.slug',
    NAME: 'fields.name',
    DESCRIPTION: 'fields.description',
}

const content_type = 'metaTag';


const fetchBySlug = async (slug: string): Promise<MetaTag> =>
    client
        .getEntries<MetaTagSkeleton>({
            content_type,
            select: [
                CONTENTFUL_META_TAG_FIELDS.SLUG as 'fields',
                CONTENTFUL_META_TAG_FIELDS.NAME as 'fields',
                CONTENTFUL_META_TAG_FIELDS.DESCRIPTION as 'fields',
            ],
            [CONTENTFUL_META_TAG_FIELDS.SLUG]: slug,
            include: 10,
        })
        .then((response) => {
            if (response.items.length === 1) {
                const item = response.items[0];
                return mapContentful(item);
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [slug]=${slug}`)
            }
            throw new Error(`Cannot find content for [slug]=${slug}`)
        })
;


export {
    fetchBySlug
}