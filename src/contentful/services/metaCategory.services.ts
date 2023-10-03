'use server';
import {MetaCategory} from "~/models";
import {client} from "../client";
import {MetaCategorySkeleton, mapContentful, mapContentfulList} from '../schema/metaCategory.schema';


const FIELDS = {
    SLUG: 'fields.slug',
    PRE_HEADING_CONTENT_BLOCKS: 'preHeadingContentBlocks.format',
    NAME: 'fields.name',
    CONTENT_BLOCKS: 'contentBlocks.format',
    PARENT_META_CATEGORY: 'fields.parentMetaCategory',
}

const content_type = 'metaCategory';

const fetchByParentId = async (parentId: string) =>
    client
        .getEntries<MetaCategorySkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.NAME as 'fields',
            ],
            // @ts-ignore
            'fields.parentMetaCategory.sys.id': parentId,
            include: 10,
        })
        .then((response) => {
            return mapContentfulList(response.items);
        })

const fetchBySlug = async (slug: string) =>
    client
        .getEntries<MetaCategorySkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.PRE_HEADING_CONTENT_BLOCKS as 'fields',
                FIELDS.NAME as 'fields',
                FIELDS.CONTENT_BLOCKS as 'fields',
                FIELDS.PARENT_META_CATEGORY as 'fields',
            ],
            [FIELDS.SLUG]: slug,
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


export {
    fetchByParentId,
    fetchBySlug
}