import clsx from "clsx";
import {BlocksBodyContentBlock} from "./block";
import {BlocksBodyContent_ContentType, BlocksBodyContent_Gap, BlocksBodyContent_LayoutType} from "~/models";


interface IProps {
    
    blocks: BlocksBodyContent_ContentType[];
    gaps: BlocksBodyContent_Gap;
}

const ColumnAdjacent = ({gaps, blocks}: IProps) => {
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
        )}
        style={{
            gridTemplateColumns: `repeat(${blocks.length}, minmax(0, 1fr)`
        }}>
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
    ColumnAdjacent
}