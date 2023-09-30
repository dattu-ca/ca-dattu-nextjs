import {BaseModel} from "./types";
import {BodyContent} from "./bodyContent";
import {BodyForm} from "./bodyForm";
import {BodyImage} from "./bodyImage";
import {BodyLinks} from "./bodyLinks";
import {BodyYoutube} from "./bodyYoutube";

export type LayoutWidth = "Full Width" | "Container Width" | "Default" | "Narrow";
export type ColumnWidths = "1/1" | "1/2, 1/2" | "1/3, 2/3" | "2/3, 1/3" | "1/3, 1/3, 1/3";
export type ColumnGaps = "None" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";
export type ColumnLayout = "Adjacent" | "Slider" | "Stacked" | "Tabbed";


export type ColumnBlock = BodyContent | BodyForm | BodyImage | BodyLinks | BodyYoutube;

export interface BlocksBodyContent extends BaseModel<'BlocksBodyContent'> {
    layoutWidth: LayoutWidth;
    columnWidths: ColumnWidths;
    columnGaps: ColumnGaps;
    column1Blocks?: ColumnBlock[] | undefined;
    column1Layout: ColumnLayout
    column1Gaps: ColumnGaps;
    column2Blocks?: ColumnBlock[] | undefined;
    column2Layout: ColumnLayout
    column2Gaps: ColumnGaps;
    column3Blocks?: ColumnBlock[] | undefined;
    column3Layout: ColumnLayout
    column3Gaps: ColumnGaps;
}