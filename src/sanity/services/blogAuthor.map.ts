import {BlogAuthor, BodyImage} from "~/models";

export const mapSanity = (raw: any) => {
    const target: Partial<BlogAuthor> = {
        cmsSource: 'Sanity',
        contentType: 'BlogAuthor',
        sysId: raw?.sysId as string,
        slug: raw?.slug as string,
        name: raw?.name as string,
        avatarInitials: raw?.avatarInitials as string,
        avatar: raw.avatarImage ? {
            cmsSource: 'Sanity',
            contentType: 'BodyImage',
            sysId: raw.avatarImage.sysId as string,
            align: 'left',
            name: raw.avatarImage.name as string,
            desktopImage: {
                alt: raw.avatarImage.alt as string,
                caption: raw.avatarImage.caption as string,
                url: raw.avatarImage.url as string
            }

        } as BodyImage : undefined
    }
    return target as BlogAuthor;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as BlogAuthor[];