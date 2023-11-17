'use client';
import {useState} from 'react';
import clsx from "clsx";
import {BlocksBodyContentBlock} from "./block";
import {BlocksBodyContent_ContentType, BlocksBodyContent_Gap, BlocksBodyContent_LayoutType} from "~/models";


interface IProps {
    blocks: BlocksBodyContent_ContentType[];
    gaps: BlocksBodyContent_Gap;
}

const ColumnTabbed = ({gaps, blocks}: IProps) => {

    const [current, setCurrent] = useState(0);
    return <div className={clsx(
        'mt-8'
    )}>
        <div
            className={clsx(
                'daisyui-tabs tabs-boxed',
                'flex-nowrap overflow-x-auto no-scrollbar whitespace-nowrap max-w-[100vw]'
            )}>
            {
                blocks.map((block, index) => {
                    return (
                        <button key={block.sysId}
                                onClick={() => setCurrent(index)}
                                className={clsx(
                                    'daisyui-tab daisyui-tab-lifted',
                                    {
                                        ['daisyui-tab-active']: current === index
                                    }
                                )}>
                            {block.displayName}
                        </button>
                    )
                })
            }
        </div>
        <div className={clsx(
            'w-full',
            'grid'
        )}>
            {
                blocks.map((block, index) => (
                    <div key={block.sysId}
                         className={clsx(
                             'col-start-1 row-start-1',
                             'transition duration-250',
                             {
                                 ['hidden']: current !== index,
                             }
                         )}>
                        <BlocksBodyContentBlock block={block}/>
                    </div>
                ))
            }
        </div>
    </div>
}

export {
    ColumnTabbed
}