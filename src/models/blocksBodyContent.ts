import { BaseModel } from "./types";
import { BodyContent } from "./bodyContent";
import { BodyForm } from "./bodyForm";
import { BodyImage } from "./bodyImage";
import { BodyLinks } from "./bodyLinks";
import { BodyYouTube } from "./bodyYoutube";
import { BodyPostsList } from "./bodyPostsList";
import { BodyCode } from "./bodyCode";
import { BodyMarkdown } from "./bodyMarkdown";


export type BlocksBodyContent_ContentType =
    BodyContent
    | BodyForm
    | BodyImage
    | BodyLinks
    | BodyYouTube
    | BodyPostsList
    | BodyCode
    | BodyMarkdown;
export type BlocksBodyContent_LayoutFormat = "Full Width" | "Container Width" | "Default" | "Narrow";
export type BlocksBodyContent_Gap = "None" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";
export type BlocksBodyContent_LayoutType = "Adjacent" | "Slider" | "Stacked" | "Tabbed";


type BlocksBodyContent_GapsWithinColumns = {
    Xs: BlocksBodyContent_Gap;
    Sm: BlocksBodyContent_Gap;
    Md: BlocksBodyContent_Gap;
    Lg: BlocksBodyContent_Gap;
    Xl: BlocksBodyContent_Gap;
}
type BlocksBodyContent_ColumnGridColumnSize = {
    Xs: number;
    Sm: number;
    Md: number;
    Lg: number;
    Xl: number;
}

export type BlocksBodyContent_GapBetweenColumns = {
    Xs: BlocksBodyContent_Gap;
    Sm: BlocksBodyContent_Gap;
    Md: BlocksBodyContent_Gap;
    Lg: BlocksBodyContent_Gap;
    Xl: BlocksBodyContent_Gap;
}
export type BlocksBodyLayoutFormat = {
    Xs: BlocksBodyContent_LayoutFormat;
    Sm: BlocksBodyContent_LayoutFormat;
    Md: BlocksBodyContent_LayoutFormat;
    Lg: BlocksBodyContent_LayoutFormat;
    Xl: BlocksBodyContent_LayoutFormat;
}

export type BlocksBodyContent_BlocksLayout = {
    gap: BlocksBodyContent_GapBetweenColumns,
    format: BlocksBodyLayoutFormat,
}
export type BlocksBodyContent_Column = {
    index: number;
    contentBlocks?: BlocksBodyContent_ContentType[] | undefined;
    layout: BlocksBodyContent_LayoutType;
    gaps: BlocksBodyContent_GapsWithinColumns;
    gridColumnsSize: BlocksBodyContent_ColumnGridColumnSize;
}

export interface BlocksBodyContent extends BaseModel<'BlocksBodyContent'> {
    displayName: string;
    slug: string;
    blockLayout: BlocksBodyContent_BlocksLayout;
    numberOfColumns: number;
    columns: BlocksBodyContent_Column[];
}