import {BlocksBodyContent, ColumnBlock} from "~/models";
import {
    IBlocksBodyContentFields,
    IBodyContent,
    IBodyForm,
    IBodyImages,
    IBodyLinks,
    IBodyYouTube
} from "./generated/index";
import {mapContentful as mapBodyContentContentful} from "./bodyContent.schema";
import {mapContentful as mapBodyImagesContentful} from "./bodyImages.schema";
import {mapContentful as mapBodyYoutubeContentful} from "./bodyYoutube.schema";
import {mapContentful as mapBodyFormContentful} from "./bodyForm.schema";
import {mapContentful as mapBodyLinksContentful} from "./bodyLinks.schema";
import {IBaseSkeleton} from "./types";

export type BlocksBodyContentSkeleton = IBaseSkeleton<'blocksBodyContent', IBlocksBodyContentFields>;

const mapBlocks = (blocks: (IBodyContent | IBodyForm | IBodyImages | IBodyLinks | IBodyYouTube)[]) => {
    return blocks.map(block => {
        const contentType = block.sys.contentType.sys.id;
        if (contentType === 'bodyContent') {
            return mapBodyContentContentful(block) as ColumnBlock;
        }
        if (contentType === 'bodyImages') {
            return mapBodyImagesContentful(block) as ColumnBlock;
        }
        if (contentType === 'bodyYouTube') {
            return mapBodyYoutubeContentful(block) as ColumnBlock;
        }
        if (contentType === 'bodyForm') {
            return mapBodyFormContentful(block) as ColumnBlock;
        }
        if (contentType === 'bodyLinks') {
            return mapBodyLinksContentful(block) as ColumnBlock;
        }
        throw new Error(`${contentType} not handled`);
    });
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
        contentType: 'BlocksBodyContent'
    };

    target.layoutWidth = fields.layoutWidth;
    target.columnWidths = fields.columnWidths;
    target.columnGaps = fields.columnGaps;

    if (fields.column1Blocks) {
        const blocks = mapBlocks(fields.column1Blocks);
        target.column1Blocks = blocks.filter(b => Boolean(b));
        target.column1Gaps = fields.column1Gaps;
        target.column1Layout = fields.column1Layout;
    }

    if (fields.column2Blocks) {
        const blocks = mapBlocks(fields.column2Blocks);
        target.column2Blocks = blocks.filter(b => Boolean(b));
        target.column2Gaps = fields.column2Gaps;
        target.column2Layout = fields.column2Layout;
    }

    if (fields.column3Blocks) {
        const blocks = mapBlocks(fields.column3Blocks);
        target.column3Blocks = blocks.filter(b => Boolean(b));
        target.column3Gaps = fields.column3Gaps;
        target.column3Layout = fields.column3Layout;
    }

    return target as BlocksBodyContent;
}

export const mapContentfulList = (raw: any[]) => (raw || []).map(source => mapContentful(source)).filter(item => Boolean(item)) as BlocksBodyContent[];