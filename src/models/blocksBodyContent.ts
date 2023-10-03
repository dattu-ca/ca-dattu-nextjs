import {BaseModel} from "./types";
import {BodyContent} from "./bodyContent";
import {BodyForm} from "./bodyForm";
import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";
import {BodyYoutube} from "./bodyYoutube";
import {BodyPostsList} from "./bodyPostsList";


export type BlocksBodyContentType = BodyContent | BodyForm | BodyImage | BodyLinks | BodyYoutube | BodyPostsList;

export type BlocksBodyContentFormat = "Full Width" | "Container Width" | "Default" | "Narrow";
export type BlocksBodyContentGap = "None" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";
export type BlocksBodyContentLayout = "Adjacent" | "Slider" | "Stacked" | "Tabbed";
export type BlocksBodyContentAlignment = "Start" | "Center" | "End";


export type BlocksBodyLayoutGap = {
    Xs: BlocksBodyContentGap;
    Sm: BlocksBodyContentGap;
    Md: BlocksBodyContentGap;
    Lg: BlocksBodyContentGap;
    Xl: BlocksBodyContentGap;
}
export type BlocksBodyLayoutFormat = {
    Xs: BlocksBodyContentFormat;
    Sm: BlocksBodyContentFormat;
    Md: BlocksBodyContentFormat;
    Lg: BlocksBodyContentFormat;
    Xl: BlocksBodyContentFormat;
};
export type BlocksBodyLayoutAlignment = {
    Xs: BlocksBodyContentAlignment;
    Sm: BlocksBodyContentAlignment;
    Md: BlocksBodyContentAlignment;
    Lg: BlocksBodyContentAlignment;
    Xl: BlocksBodyContentAlignment;
}

export type BlocksBodyContentColumnLayout = {
    Xs: BlocksBodyContentLayout;
    Sm: BlocksBodyContentLayout;
    Md: BlocksBodyContentLayout;
    Lg: BlocksBodyContentLayout;
    Xl: BlocksBodyContentLayout;
}

export type BlocksBodyContentColumnGaps = {
    Xs: BlocksBodyContentGap;
    Sm: BlocksBodyContentGap;
    Md: BlocksBodyContentGap;
    Lg: BlocksBodyContentGap;
    Xl: BlocksBodyContentGap;
}
export type BlocksBodyContentColumnGridColumnSize = {
    Xs: number;
    Sm: number;
    Md: number;
    Lg: number;
    Xl: number;
};


export type BlocksBodyLayout = {
    gap: BlocksBodyLayoutGap,
    format: BlocksBodyLayoutFormat,
    alignment: BlocksBodyLayoutAlignment
}
export type BlocksBodyContentColumn = {
    index: number;
    contentBlocks?: BlocksBodyContentType[] | undefined;
    layout: BlocksBodyContentColumnLayout;
    gaps: BlocksBodyContentColumnGaps;
    gridColumnsSize: BlocksBodyContentColumnGridColumnSize;
}


export interface BlocksBodyContent extends BaseModel<'BlocksBodyContent'> {
    blockLayout: BlocksBodyLayout;
    columns: BlocksBodyContentColumn[];
}