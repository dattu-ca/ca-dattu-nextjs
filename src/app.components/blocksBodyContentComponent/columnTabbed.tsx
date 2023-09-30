'use client';
import {useState} from 'react';
import clsx from "clsx";
import {BlocksBodyContentBlock} from "./block";
import {ColumnBlock, ColumnGaps, ColumnLayout} from "~/models";


interface IProps {
    blocks: ColumnBlock[];
    gaps: ColumnGaps;
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
                                        ['dark:text-[var(--tab-bg)]']: current !== index, 
                                        ['daisyui-tab-active dark:text-[var(--tab-color)]']: current === index
                                    }
                                )}>
                            {block.name}
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