import {BaseModel} from "./types";
import {BodyContent} from "./bodyContent";
import {BodyForm} from "./bodyForm";
import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";
import {BodyYoutube} from "./bodyYoutube";
import {BodyPostsList} from "./bodyPostsList";


export type BlocksBodyContent_ContentType = BodyContent | BodyForm | BodyImage | BodyLinks | BodyYoutube | BodyPostsList;
export type BlocksBodyContent_LayoutFormat = "Full Width" | "Container Width" | "Default" | "Narrow";
export type BlocksBodyContent_Gap = "None" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";
export type BlocksBodyContent_LayoutType = "Adjacent" | "Slider" | "Stacked" | "Tabbed";


interface BlocksBodyContent_GapsWithinColumns  {
    Xs: BlocksBodyContent_Gap;
    Sm: BlocksBodyContent_Gap;
    Md: BlocksBodyContent_Gap;
    Lg: BlocksBodyContent_Gap;
    Xl: BlocksBodyContent_Gap;
}
interface BlocksBodyContent_ColumnGridColumnSize  {
    Xs: number;
    Sm: number;
    Md: number;
    Lg: number;
    Xl: number;
}

export interface BlocksBodyContent_GapBetweenColumns {
    Xs: BlocksBodyContent_Gap;
    Sm: BlocksBodyContent_Gap;
    Md: BlocksBodyContent_Gap;
    Lg: BlocksBodyContent_Gap;
    Xl: BlocksBodyContent_Gap;
}
export interface BlocksBodyLayoutFormat  {
    Xs: BlocksBodyContent_LayoutFormat;
    Sm: BlocksBodyContent_LayoutFormat;
    Md: BlocksBodyContent_LayoutFormat;
    Lg: BlocksBodyContent_LayoutFormat;
    Xl: BlocksBodyContent_LayoutFormat;
};

export interface BlocksBodyContent_BlocksLayout {
    gap: BlocksBodyContent_GapBetweenColumns,
    format: BlocksBodyLayoutFormat,
}
export interface BlocksBodyContent_Column {
    index: number;
    contentBlocks?: BlocksBodyContent_ContentType[] | undefined;
    layout: BlocksBodyContent_LayoutType;
    gaps: BlocksBodyContent_GapsWithinColumns;
    gridColumnsSize: BlocksBodyContent_ColumnGridColumnSize;
}

export interface BlocksBodyContent extends BaseModel<'BlocksBodyContent'> {
    blockLayout: BlocksBodyContent_BlocksLayout;
    columns: BlocksBodyContent_Column[];
}