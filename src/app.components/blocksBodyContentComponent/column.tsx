import {BlocksBodyContent_ContentType, BlocksBodyContent_Gap, BlocksBodyContent_LayoutType} from "~/models";
import {ColumnAdjacent} from "./columnAdjacent";
import {ColumnSlider} from "./columnSlider";
import {ColumnTabbed} from "./columnTabbed";
import {ColumnStacked} from "./columnStacked";


interface IProps {
    blocks?: BlocksBodyContent_ContentType[] | undefined;
    layout: BlocksBodyContent_LayoutType;
    gaps: BlocksBodyContent_Gap;
}

const BlocksBodyContentColumnComponent = ({blocks, layout, gaps}: IProps) => {
    if (!blocks || !Array.isArray(blocks)) {
        return null;
    }

    if (layout === 'Tabbed' && blocks.length > 1) {
        return <ColumnTabbed blocks={blocks} gaps={gaps}/>
    }

    if (layout === 'Adjacent') {
        return <ColumnAdjacent blocks={blocks} gaps={gaps}/>
    }

    if (layout === 'Slider' && blocks.length > 1) {
        return <ColumnSlider blocks={blocks} gaps={gaps}/>
    }
    return <ColumnStacked blocks={blocks} gaps={gaps}/>
}

export {
    BlocksBodyContentColumnComponent
}