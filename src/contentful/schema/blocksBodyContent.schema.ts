import {
    BlocksBodyContent,
    BlocksBodyContent_Column,
    BlocksBodyContent_LayoutFormat,
    BlocksBodyContent_Gap,
    BlocksBodyContent_LayoutType,
    BlocksBodyContent_ContentType,
    BlocksBodyContent_BlocksLayout
} from "~/models";
import {
    IBlocksBodyContentFields,
    IBodyContent,
    IBodyForm,
    IBodyImages,
    IBodyLinks, IBodyPostsList,
    IBodyYouTube
} from "./generated/index";
import {mapContentful as mapBodyContentContentful} from "./bodyContent.schema";
import {mapContentful as mapBodyImagesContentful} from "./bodyImages.schema";
import {mapContentful as mapBodyYoutubeContentful} from "./bodyYoutube.schema";
import {mapContentful as mapBodyFormContentful} from "./bodyForm.schema";
import {mapContentful as mapBodyLinksContentful} from "./bodyLinks.schema";
import {mapContentful as mapBodyPostsListContentful} from "./bodyPostsList.schema";
import {IBaseSkeleton} from "./types";

export type BlocksBodyContentSkeleton = IBaseSkeleton<'blocksBodyContent', IBlocksBodyContentFields>;

const mapBlocks = (blocks: (IBodyContent | IBodyForm | IBodyImages | IBodyLinks | IBodyYouTube | IBodyPostsList)[]) => {
    return blocks.map(block => {
        const contentType = block.sys.contentType.sys.id;
        if (contentType === 'bodyContent') {
            return mapBodyContentContentful(block) as BlocksBodyContent_ContentType;
        }
        if (contentType === 'bodyImages') {
            return mapBodyImagesContentful(block) as BlocksBodyContent_ContentType;
        }
        if (contentType === 'bodyYouTube') {
            return mapBodyYoutubeContentful(block) as BlocksBodyContent_ContentType;
        }
        if (contentType === 'bodyForm') {
            return mapBodyFormContentful(block) as BlocksBodyContent_ContentType;
        }
        if (contentType === 'bodyLinks') {
            return mapBodyLinksContentful(block) as BlocksBodyContent_ContentType;
        }
        if (contentType === 'bodyPostsList') {
            return mapBodyPostsListContentful(block) as BlocksBodyContent_ContentType;
        }
        throw new Error(`${contentType} not handled`);
    });
}

const mapColumn = (
    blocks: (IBodyContent | IBodyForm | IBodyImages | IBodyLinks | IBodyYouTube | IBodyPostsList)[] | undefined,
    columnsLayout: Record<string, any>,
    columnIndex: number
) => {

    const column: Partial<BlocksBodyContent_Column> = {
        index: columnIndex,
        contentBlocks: blocks ? mapBlocks(blocks) : undefined,
        layout: columnsLayout.layouts[columnIndex] as BlocksBodyContent_LayoutType,
        gaps: {
            Xs: columnsLayout.gaps.Xs[columnIndex] as BlocksBodyContent_Gap,
            Sm: columnsLayout.gaps.Sm[columnIndex] as BlocksBodyContent_Gap,
            Md: columnsLayout.gaps.Md[columnIndex] as BlocksBodyContent_Gap,
            Lg: columnsLayout.gaps.Lg[columnIndex] as BlocksBodyContent_Gap,
            Xl: columnsLayout.gaps.Xl[columnIndex] as BlocksBodyContent_Gap,
        },
        gridColumnsSize: {
            Xs: columnsLayout.sizes.Xs[columnIndex] as number,
            Sm: columnsLayout.sizes.Sm[columnIndex] as number,
            Md: columnsLayout.sizes.Md[columnIndex] as number,
            Lg: columnsLayout.sizes.Lg[columnIndex] as number,
            Xl: columnsLayout.sizes.Xl[columnIndex] as number,
        }
    };

    return column as BlocksBodyContent_Column;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BlocksBodyContentSkeleton;
    const fields = source.fields;
    if (!fields) {
        return undefined;
    }
    const target: Partial<BlocksBodyContent> = {
        cmsSource: 'Contentful',
        sysId: source.sys.id,
        contentType: 'BlocksBodyContent',
        columns: []
    };
    target.columns = [];

    if (fields.blockLayout) {
        const blockLayout = fields.blockLayout;
        target.blockLayout = {
            format: {
                Xs: blockLayout.format.Xs as BlocksBodyContent_LayoutFormat,
                Sm: blockLayout.format.Sm as BlocksBodyContent_LayoutFormat,
                Md: blockLayout.format.Md as BlocksBodyContent_LayoutFormat,
                Lg: blockLayout.format.Lg as BlocksBodyContent_LayoutFormat,
                Xl: blockLayout.format.Xl as BlocksBodyContent_LayoutFormat,
            },
            gap: {
                Xs: blockLayout.gap.Xs as BlocksBodyContent_Gap,
                Sm: blockLayout.gap.Sm as BlocksBodyContent_Gap,
                Md: blockLayout.gap.Md as BlocksBodyContent_Gap,
                Lg: blockLayout.gap.Lg as BlocksBodyContent_Gap,
                Xl: blockLayout.gap.Xl as BlocksBodyContent_Gap,
            }
        } as BlocksBodyContent_BlocksLayout
    }
    target.columns.push(mapColumn(fields.column1Blocks, fields.columnsLayout as Record<string, any>, 0))
    target.columns.push(mapColumn(fields.column2Blocks, fields.columnsLayout as Record<string, any>, 1))
    target.columns.push(mapColumn(fields.column3Blocks, fields.columnsLayout as Record<string, any>, 2))

    return target as BlocksBodyContent;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlocksBodyContent[];


export const mapBodyPostsLists = (blocks: BlocksBodyContent[]) => {
    const ret = [];
    if (blocks) {
        for (const block of blocks) {
            if (block.columns.filter(c => c.contentBlocks)) {
                for (const column of block.columns.filter(c => c.contentBlocks)) {
                    if (column.contentBlocks) {
                        for (const contentBlock of column.contentBlocks) {
                            if (contentBlock.contentType === 'BodyPostsList') {
                                ret.push(contentBlock);
                            }
                        }
                    }
                }
            }
        }
    }
    return ret;
}
