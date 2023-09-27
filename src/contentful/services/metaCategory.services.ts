import {client} from "../client";
import {MetaCategorySkeleton, mapContentful} from '../schema/metaCategory.schema'


const CONTENTFUL_META_CATEGORY_FIELDS = {
    SLUG: 'fields.slug',
    NAME: 'fields.name',
    DESCRIPTION: 'fields.description',
    PARENT_META_CATEGORY: 'fields.parentMetaCategory',
}

const content_type = 'metaCategory';


const fetchBySlug = (slug: string) =>
    client
        .getEntries<MetaCategorySkeleton>({
            content_type,
            select: [
                CONTENTFUL_META_CATEGORY_FIELDS.SLUG as 'fields',
                CONTENTFUL_META_CATEGORY_FIELDS.NAME as 'fields',
                CONTENTFUL_META_CATEGORY_FIELDS.DESCRIPTION as 'fields',
                CONTENTFUL_META_CATEGORY_FIELDS.PARENT_META_CATEGORY as 'fields',
            ],
            [CONTENTFUL_META_CATEGORY_FIELDS.SLUG]: slug,
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
        });


export {
    fetchBySlug
}