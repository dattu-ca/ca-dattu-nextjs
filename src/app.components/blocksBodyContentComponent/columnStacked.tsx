import clsx from "clsx";
import {BlocksBodyContentBlock} from "./block";
import {BlocksBodyContentType, BlocksBodyContentGap, BlocksBodyContentLayout} from "~/models";


interface IProps {
    blocks: BlocksBodyContentType[];
    gaps: BlocksBodyContentGap;
}

const ColumnStacked = ({gaps, blocks}: IProps) => {
    return <div
        className={clsx(
            'grid',
            'grid-cols-none',
            {
                ['gap-0']: gaps === 'None',
                ['gap-2']: gaps === 'Xs',
                ['gap-4']: gaps === 'Sm',
                ['gap-6']: gaps === 'Md',
                ['gap-8']: gaps === 'Lg',
                ['gap-10']: gaps === 'Xl',
            }
        )}>
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
    ColumnStacked
}