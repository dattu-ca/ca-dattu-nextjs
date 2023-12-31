import {BlogAuthor, BodyImage} from "~/models";
import {mapSanityList as mapBlocksBodyContentSanityList} from './blocksBodyContent.map'

export const mapSanity = (raw: any) => {
    const target: Partial<BlogAuthor> = {
        cmsSource: 'Sanity',
        contentType: 'BlogAuthor',
        sysId: raw?.sysId as string,
        slug: raw?.slug as string,
        displayName: raw?.displayName as string,
        avatarInitials: raw?.avatarInitials as string,
        avatar: raw.avatarImage ? {
            cmsSource: 'Sanity',
            contentType: 'BodyImage',
            sysId: raw.avatarImage.sysId as string,
            align: 'left',
            displayName: raw.avatarImage.name as string,
            desktopImage: {
                alt: raw.avatarImage.alt as string,
                caption: raw.avatarImage.caption as string,
                url: raw.avatarImage.url as string
            }

        } as BodyImage : undefined,
        preHeadingContentBlocks: mapBlocksBodyContentSanityList(raw.preHeadingContentBlocks, 'PreHeadingContent'),
        contentBlocks: mapBlocksBodyContentSanityList(raw.contentBlocks, "Content"),
    }
    return target as BlogAuthor;
}
export const mapSanityList = (raw: any[]) => (raw || []).map(source => mapSanity(source)).filter(item => Boolean(item)) as BlogAuthor[];