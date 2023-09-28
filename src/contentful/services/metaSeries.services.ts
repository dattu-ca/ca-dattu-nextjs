'use server';
import {MetaSeries} from "~/models";
import {client} from "../client";
import {MetaSeriesSkeleton, mapContentful} from '../schema/metaSeries.schema'


const FIELDS = {
    SLUG: 'fields.slug',
    NAME: 'fields.name',
    DESCRIPTION: 'fields.description',
}

const content_type = 'metaSeries';


const fetchBySlug = async (slug: string): Promise<MetaSeries> =>
    client
        .getEntries<MetaSeriesSkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.NAME as 'fields',
                FIELDS.DESCRIPTION as 'fields',
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
    fetchBySlug
}