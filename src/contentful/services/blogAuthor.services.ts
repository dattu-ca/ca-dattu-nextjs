import {client} from "../client";
import {BlogAuthorSkeleton, mapContentful} from '../schema/blogAuthor.schema'



const CONTENTFUL_BLOG_AUTHOR_FIELDS = {
    SLUG: 'fields.slug',
    NAME: 'fields.name',
    AVATAR: 'fields.avatar',
    AVATAR_INITIALS: 'fields.avatarInitials',
    SHORT_BIO: 'fields.shortBio',
    BIO: 'fields.bio',
    BANNERS: 'fields.banners',

}

const content_type = 'blogAuthor';


const fetchBySlug = (slug: string) =>
    client
        .getEntries<BlogAuthorSkeleton>({
            content_type,
            select: [
                CONTENTFUL_BLOG_AUTHOR_FIELDS.SLUG as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.NAME as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.AVATAR as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.AVATAR_INITIALS as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.SHORT_BIO as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.BIO as 'fields',
                CONTENTFUL_BLOG_AUTHOR_FIELDS.BANNERS as 'fields',
            ],
            [CONTENTFUL_BLOG_AUTHOR_FIELDS.SLUG]: slug,
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