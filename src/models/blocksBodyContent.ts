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


export type BlocksBodyLayout = {
    gap: {
        Xs: BlocksBodyContentGap;
        Sm: BlocksBodyContentGap;
        Md: BlocksBodyContentGap;
        Lg: BlocksBodyContentGap;
        Xl: BlocksBodyContentGap;
    },
    format: {
        Xs: BlocksBodyContentFormat;
        Sm: BlocksBodyContentFormat;
        Md: BlocksBodyContentFormat;
        Lg: BlocksBodyContentFormat;
        Xl: BlocksBodyContentFormat;
    },
    alignment: {
        Xs: BlocksBodyContentAlignment;
        Sm: BlocksBodyContentAlignment;
        Md: BlocksBodyContentAlignment;
        Lg: BlocksBodyContentAlignment;
        Xl: BlocksBodyContentAlignment;
    }
}
export type BlocksBodyContentColumn = {
    index: number;
    /**
     * The actual content
     */
    content?: BlocksBodyContentType[] | undefined;
    layout: {
        Xs: BlocksBodyContentLayout;
        Sm: BlocksBodyContentLayout;
        Md: BlocksBodyContentLayout;
        Lg: BlocksBodyContentLayout;
        Xl: BlocksBodyContentLayout;
    };
    gaps: {
        Xs: BlocksBodyContentGap;
        Sm: BlocksBodyContentGap;
        Md: BlocksBodyContentGap;
        Lg: BlocksBodyContentGap;
        Xl: BlocksBodyContentGap;
    };
    gridColumnsSize: {
        Xs: number;
        Sm: number;
        Md: number;
        Lg: number;
        Xl: number;
    };
}


export interface BlocksBodyContent extends BaseModel<'BlocksBodyContent'> {
    blockLayout: BlocksBodyLayout;
    columns: BlocksBodyContentColumn[];
}