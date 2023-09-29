'use server';
import {client} from "../client";
import {BlogAuthorSkeleton, mapContentful} from '../schema/blogAuthor.schema'

const FIELDS = {
    SLUG: 'fields.slug',
    NAME: 'fields.name',
    AVATAR: 'fields.avatar',
    AVATAR_INITIALS: 'fields.avatarInitials',
    SHORT_BIO: 'fields.shortBio',
    CONTENT_BLOCKS: 'fields.contentBlocks',
    BIO: 'fields.bio',
    BANNERS: 'fields.banners',

}

const content_type = 'blogAuthor';


const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogAuthorSkeleton>({
            content_type,
            select: [
                FIELDS.SLUG as 'fields',
                FIELDS.NAME as 'fields',
                FIELDS.AVATAR as 'fields',
                FIELDS.AVATAR_INITIALS as 'fields',
                FIELDS.SHORT_BIO as 'fields',
                FIELDS.CONTENT_BLOCKS as 'fields',
                FIELDS.BIO as 'fields',
                FIELDS.BANNERS as 'fields',
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
        });


export {
    fetchBySlug
}