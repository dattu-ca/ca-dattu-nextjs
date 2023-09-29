import clsx from "clsx";
import {BlocksBodyContentBlock} from "./block";
import {ColumnBlock, ColumnGaps, ColumnLayout} from "~/models";


interface IProps {
    blocks: ColumnBlock[];
    gaps: ColumnGaps;
}

const ColumnTabbed = ({gaps, blocks}: IProps) => {
    return <div
        className={clsx()}>
        {
            blocks.map(block => (
                <div key={block.sysId}>
                    <BlocksBodyContentBlock block={block}/>
                </div>
            ))
        }
    </div>
}

export {
    ColumnTabbed
}