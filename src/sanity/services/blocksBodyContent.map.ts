'use server';
import {
    BlocksBodyContent,
    BlocksBodyContent_Column,
    BlocksBodyContent_LayoutFormat,
    BlocksBodyContent_Gap,
    BlocksBodyContent_LayoutType,
    BlocksBodyContent_ContentType,
} from "~/models";

import {mapSanity as mapBodyImagesSanity} from "./bodyImages.map";
import {mapSanity as mapBodyLinksSanity} from "./bodyLinks.map";
import {mapSanity as mapBodyFormSanity} from "./bodyForm.map";
import {mapSanity as mapBodyYouTubeSanity} from "./bodyYouTube.map";
import {mapSanity as mapBodyContentSanity} from "./bodyContent.map";
import {mapSanity as mapBodyCodeSanity} from "./bodyCode.map";
import {mapSanity as mapBodyMarkdownSanity} from "./bodyMarkdown.map";
import {mapSanity as mapBodyPostsListSanity} from "./bodyPostsList.map";

type ContentType = 'PreHeadingContent' | 'Content' | 'PreHeadingExcerpt' | 'Excerpt';
const mapBlocks = (raw: any[]) => {
    if (Array.isArray(raw) && raw.length > 0) {
        return raw.map((item) => {
            switch (item.type) {
                case 'bodyImages': {
                    return mapBodyImagesSanity(item)
                }
                case 'bodyLinks': {
                    return mapBodyLinksSanity(item)
                }
                case 'bodyForm': {
                    return mapBodyFormSanity(item)
                }
                case 'bodyYouTube': {
                    return mapBodyYouTubeSanity(item)
                }
                case 'bodyContent': {
                    return mapBodyContentSanity(item)
                }
                case 'bodyCode': {
                    return mapBodyCodeSanity(item);
                }
                case 'bodyMarkdown': {
                    return mapBodyMarkdownSanity(item);
                }
                case 'bodyPostsList': {
                    return mapBodyPostsListSanity(item);
                }
                default: {
                    return {
                        sysId: item.sysId,
                        contentType: item.type,
                        name: 'NO MAPPING FOUND'
                    } as BlocksBodyContent_ContentType
                }
            }
        })
    }
    return [] as BlocksBodyContent_ContentType[];
}

const mapColumns = (raw: any, rawColumnSizes: any, numberOfColumns: number) => {
    const target: BlocksBodyContent_Column[] = [];
    for (let i = 0; i < numberOfColumns; i++) {
        const rawColumn = raw[i];
        const column: BlocksBodyContent_Column = {
            index: i,
            layout: (rawColumn?.format ?? 'Adjacent') as BlocksBodyContent_LayoutType,
            gaps: {
                Xs: (rawColumn?.gaps?.xs ?? "None") as BlocksBodyContent_Gap,
                Sm: (rawColumn?.gaps?.sm ?? "None") as BlocksBodyContent_Gap,
                Md: (rawColumn?.gaps?.md ?? "None") as BlocksBodyContent_Gap,
                Lg: (rawColumn?.gaps?.lg ?? "None") as BlocksBodyContent_Gap,
                Xl: (rawColumn?.gaps?.xl ?? "None") as BlocksBodyContent_Gap,
            },
            gridColumnsSize: {
                Xs: rawColumnSizes.xs[i] as number,
                Sm: rawColumnSizes.sm[i] as number,
                Md: rawColumnSizes.md[i] as number,
                Lg: rawColumnSizes.lg[i] as number,
                Xl: rawColumnSizes.xl[i] as number,
            },
            contentBlocks: mapBlocks(rawColumn?.contentCollection)
        }

        target.push(column);
    }
    return target;
}

const mapSanity = (raw: any) => {
    const target: BlocksBodyContent = {
        cmsSource: 'Sanity',
        sysId: raw.sysId as string,
        contentType: 'BlocksBodyContent',
        slug: raw.slug as string,
        name: raw.name as string,
        numberOfColumns: raw.numberOfColumns as number,
        columns: mapColumns(raw.contentColumns, raw.columnSizes, raw.numberOfColumns),
        blockLayout: {
            format: {
                Xs: raw.widths.xs as BlocksBodyContent_LayoutFormat,
                Sm: raw.widths.sm as BlocksBodyContent_LayoutFormat,
                Md: raw.widths.md as BlocksBodyContent_LayoutFormat,
                Lg: raw.widths.lg as BlocksBodyContent_LayoutFormat,
                Xl: raw.widths.xl as BlocksBodyContent_LayoutFormat,
            },
            gap: {
                Xs: raw.gaps.xs as BlocksBodyContent_Gap,
                Sm: raw.gaps.sm as BlocksBodyContent_Gap,
                Md: raw.gaps.md as BlocksBodyContent_Gap,
                Lg: raw.gaps.lg as BlocksBodyContent_Gap,
                Xl: raw.gaps.xl as BlocksBodyContent_Gap,
            }
        }
    }


    return target as BlocksBodyContent;
}

const mapDefaultBlocksBodyContent = (raw: any, type: ContentType) => {
    const target: BlocksBodyContent = {
        cmsSource: 'Sanity',
        sysId: raw?.sysId as string,
        contentType: 'BlocksBodyContent',
        slug: raw?.slug as string,
        name: raw?.name as string,
        numberOfColumns: raw.numberOfColumns as number,
        columns: [
            {
                index: 0,
                layout: type === 'PreHeadingContent' ? 'Slider' : "Stacked",
                gaps: {
                    Xs: "None",
                    Sm: "None",
                    Md: "None",
                    Lg: "None",
                    Xl: "None",
                },
                gridColumnsSize: {
                    Xs: 12,
                    Sm: 12,
                    Md: 12,
                    Lg: 12,
                    Xl: 12,
                },
                contentBlocks: mapBlocks(Array.isArray(raw) ? raw : [raw])
            }
        ],
        blockLayout: {
            format: {
                Xs: type === 'PreHeadingContent' ? 'Full Width' : "Container Width",
                Sm: type === 'PreHeadingContent' ? 'Full Width' : "Container Width",
                Md: type === 'PreHeadingContent' ? 'Full Width' : "Default",
                Lg: type === 'PreHeadingContent' ? 'Full Width' : "Default",
                Xl: type === 'PreHeadingContent' ? 'Full Width' : "Narrow",
            },
            gap: {
                Xs: "None",
                Sm: "None",
                Md: "None",
                Lg: "None",
                Xl: "None",
            }
        }
    }
    return target;
}

export const mapSanityList = (raw: any[], type: ContentType) => {
    if (type === 'PreHeadingContent') {
        return [mapDefaultBlocksBodyContent(raw, type)];
    }
    return (raw || []).map(raw => {
        if (raw.type === 'contactBlock') {
            return mapSanity(raw)
        }
        return mapDefaultBlocksBodyContent(raw, type);
    }).filter(item => Boolean(item)) as BlocksBodyContent[]
};