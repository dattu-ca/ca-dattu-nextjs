import {
    BlocksBodyContent,
    BlocksBodyContentAlignment,
    BlocksBodyContentColumn,
    BlocksBodyContentFormat,
    BlocksBodyContentGap,
    BlocksBodyContentLayout,
    BlocksBodyContentType,
    BlocksBodyLayout
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
            return mapBodyContentContentful(block) as BlocksBodyContentType;
        }
        if (contentType === 'bodyImages') {
            return mapBodyImagesContentful(block) as BlocksBodyContentType;
        }
        if (contentType === 'bodyYouTube') {
            return mapBodyYoutubeContentful(block) as BlocksBodyContentType;
        }
        if (contentType === 'bodyForm') {
            return mapBodyFormContentful(block) as BlocksBodyContentType;
        }
        if (contentType === 'bodyLinks') {
            return mapBodyLinksContentful(block) as BlocksBodyContentType;
        }
        if (contentType === 'bodyPostsList') {
            return mapBodyPostsListContentful(block) as BlocksBodyContentType;
        }
        throw new Error(`${contentType} not handled`);
    });
}

const mapColumn = (blocks, columnsLayout, columnIndex: number) => {
    console.log(columnsLayout.gaps)
    const column: Partial<BlocksBodyContentColumn> = {
        index: columnIndex,
        // content: blocks,
        layout: {
            Xs: columnsLayout.layouts.Xs[columnIndex] as BlocksBodyContentLayout,
            Sm: columnsLayout.layouts.Sm[columnIndex] as BlocksBodyContentLayout,
            Md: columnsLayout.layouts.Md[columnIndex] as BlocksBodyContentLayout,
            Lg: columnsLayout.layouts.Lg[columnIndex] as BlocksBodyContentLayout,
            Xl: columnsLayout.layouts.Xl[columnIndex] as BlocksBodyContentLayout,
        },
        gaps: {
            Xs: columnsLayout.gaps.Xs[columnIndex] as BlocksBodyContentGap,
            Sm: columnsLayout.gaps.Sm[columnIndex] as BlocksBodyContentGap,
            Md: columnsLayout.gaps.Md[columnIndex] as BlocksBodyContentGap,
            Lg: columnsLayout.gaps.Lg[columnIndex] as BlocksBodyContentGap,
            Xl: columnsLayout.gaps.Xl[columnIndex] as BlocksBodyContentGap,
        }
    };

    return column as BlocksBodyContentColumn;
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
        sysId: source.sys.id,
        contentType: 'BlocksBodyContent',
        columns: []
    };
    target.columns = [];


    console.log(fields);
    if (fields.blockLayout) {
        const blockLayout = fields.blockLayout;
        target.blockLayout = {
            alignment: {
                Xs: blockLayout.alignment.Xs as BlocksBodyContentAlignment,
                Sm: blockLayout.alignment.Sm as BlocksBodyContentAlignment,
                Md: blockLayout.alignment.Md as BlocksBodyContentAlignment,
                Lg: blockLayout.alignment.Lg as BlocksBodyContentAlignment,
                Xl: blockLayout.alignment.Xl as BlocksBodyContentAlignment,
            },
            format: {
                Xs: blockLayout.format.Xs as BlocksBodyContentFormat,
                Sm: blockLayout.format.Sm as BlocksBodyContentFormat,
                Md: blockLayout.format.Md as BlocksBodyContentFormat,
                Lg: blockLayout.format.Lg as BlocksBodyContentFormat,
                Xl: blockLayout.format.Xl as BlocksBodyContentFormat,
            },
            gap: {
                Xs: blockLayout.gap.Xs as BlocksBodyContentGap,
                Sm: blockLayout.gap.Sm as BlocksBodyContentGap,
                Md: blockLayout.gap.Md as BlocksBodyContentGap,
                Lg: blockLayout.gap.Lg as BlocksBodyContentGap,
                Xl: blockLayout.gap.Xl as BlocksBodyContentGap,
            }
        } as BlocksBodyLayout
    }
    if (fields.column1Blocks) {
        target.columns.push(mapColumn(fields.column1Blocks, fields.columnsLayout, 0))
    }
    if (fields.column2Blocks) {
        target.columns.push(mapColumn(fields.column2Blocks, fields.columnsLayout, 1))
    }
    if (fields.column3Blocks) {
        target.columns.push(mapColumn(fields.column3Blocks, fields.columnsLayout, 2))
    }
    return target as BlocksBodyContent;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlocksBodyContent[];