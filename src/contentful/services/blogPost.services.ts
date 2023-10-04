'use server';
import {client} from "../client";
import {BlogPostSkeleton, mapContentful, mapContentfulList} from '../schema/blogPost.schema'
import {BlogPost} from "~/models";


const FIELDS = {
    SLUG: 'fields.slug',
    PUBLISHED_DATE: 'fields.publishedDate',
    FORMAT: 'fields.format',
    PRE_HEADING_CONTENT_BLOCKS: 'fields.preHeadingContentBlocks',
    HEADING: 'fields.heading',
    FEATURED_BANNER: 'fields.featuredBanner',
    EXCERPT_BLOCKS: 'fields.excerptBlocks',
    CONTENT_BLOCKS: 'fields.contentBlocks',
    AUTHORS: 'fields.authors',
    CATEGORIES: 'fields.categories',
    TAGS: 'fields.tags',
    SERIES: 'fields.series',
}

const PAGINATED_SELECT_FIELDS = [
    FIELDS.SLUG as 'fields',
    FIELDS.PUBLISHED_DATE as 'fields',
    FIELDS.HEADING as 'fields',
    FIELDS.FEATURED_BANNER as 'fields',
    FIELDS.EXCERPT_BLOCKS as 'fields',
];

const content_type = 'blogPost';

const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.PUBLISHED_DATE as 'fields',
                FIELDS.FORMAT as 'fields',
                FIELDS.PRE_HEADING_CONTENT_BLOCKS as 'fields',
                FIELDS.HEADING as 'fields',
                FIELDS.CONTENT_BLOCKS as 'fields',
                FIELDS.AUTHORS as 'fields',
                FIELDS.CATEGORIES as 'fields',
                FIELDS.TAGS as 'fields',
                FIELDS.SERIES as 'fields',
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


const fetchListPaginated = (skip: number = 0, limit: number = 10): Promise<{ items: BlogPost[], total: number }> =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            order: `-${FIELDS.PUBLISHED_DATE}`,
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            const items = mapContentfulList(response.items);
            return {
                items,
                total: response.total as number,
            }
        })

const fetchListPaginatedByAuthor = (authorId: string, skip: number = 0, limit: number = 10) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            'fields.authors.sys.id': authorId,
            // @ts-ignore
            order: `-${FIELDS.PUBLISHED_DATE}`,
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            const items = mapContentfulList(response.items);
            return {
                items,
                total: response.total,
            }
        })

const fetchListPaginatedByCategories = (categoryIds: string[], skip: number = 0, limit: number = 10) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            'fields.categories.sys.id[in]': categoryIds.join(","),
            // @ts-ignore
            order: `-${FIELDS.PUBLISHED_DATE}`,
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            const items = mapContentfulList(response.items);
            return {
                items,
                total: response.total,
            }
        })

const fetchListPaginatedByTag = (tagId: string, skip: number = 0, limit: number = 10) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            'fields.tags.sys.id': tagId,
            // @ts-ignore
            order: `-${FIELDS.PUBLISHED_DATE}`,
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            const items = mapContentfulList(response.items);
            return {
                items,
                total: response.total,
            }
        })

const fetchListPaginatedBySeries = (seriesId: string, skip: number = 0, limit: number = 10) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            'fields.series.sys.id': seriesId,
            // @ts-ignore
            order: `-${FIELDS.PUBLISHED_DATE}`,
            skip: skip,
            limit: limit,
            include: 10,
        })
        .then((response) => {
            const items = mapContentfulList(response.items);
            return {
                items,
                total: response.total,
            }
        })

const fetchListBySeries = (seriesId: string) =>
    client
        .getEntries<BlogPostSkeleton>({
            content_type,
            select: PAGINATED_SELECT_FIELDS,
            // @ts-ignore
            'fields.series.sys.id': seriesId,
            // @ts-ignore
            order: `${FIELDS.PUBLISHED_DATE}`,
            include: 10,
        })
        .then((response) => {
            return mapContentfulList(response.items);
        })

export {
    fetchBySlug,
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByCategories,
    fetchListPaginatedByTag,
    fetchListBySeries,
    fetchListPaginatedBySeries,
}