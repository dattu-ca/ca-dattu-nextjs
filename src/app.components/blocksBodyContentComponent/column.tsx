import {BlocksBodyContentType, BlocksBodyContentGap, BlocksBodyContentLayout} from "~/models";
import {ColumnAdjacent} from "./columnAdjacent";
import {ColumnSlider} from "./columnSlider";
import {ColumnTabbed} from "./columnTabbed";
import {ColumnStacked} from "./columnStacked";


interface IProps {
    blocks?: BlocksBodyContentType[] | undefined;
    layout: BlocksBodyContentLayout;
    gaps: BlocksBodyContentGap;
}

const BlocksBodyContentColumn = ({blocks, layout, gaps}: IProps) => {
    if (!blocks || !Array.isArray(blocks)) {
        return null;
    }

    if (layout === 'Tabbed') {
        return <ColumnTabbed blocks={blocks} gaps={gaps}/>
    }

    if (layout === 'Adjacent') {
        return <ColumnAdjacent blocks={blocks} gaps={gaps}/>
    }

    if (layout === 'Slider') {
        return <ColumnSlider blocks={blocks} gaps={gaps}/>
    }
    return <ColumnStacked blocks={blocks} gaps={gaps}/>
}

export {
    BlocksBodyContentColumn
}