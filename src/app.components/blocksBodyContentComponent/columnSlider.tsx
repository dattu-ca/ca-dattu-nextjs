'use client';
import {useEffect, useMemo, useRef, useState} from 'react';
import clsx from "clsx";
import {FaRegCircle} from "react-icons/fa6";
import {FaRegDotCircle} from "react-icons/fa";
import {BlocksBodyContent_ContentType, BlocksBodyContent_Gap} from "~/models";
import {BlocksBodyContentBlock} from "./block";
import {useWindowDimensions} from "~/hooks/useWindowDimensions";


interface IProps {
    blocks: BlocksBodyContent_ContentType[];
    gaps: BlocksBodyContent_Gap;
}

const ColumnSlider = ({blocks}: IProps) => {
    // @ts-ignore
    const ref = useRef<HTMLDivElement>(null)

    const [current, setCurrent] = useState(0);
    const [deltaX, setDeltaX] = useState(0);

    const {width} = useWindowDimensions();

    const translateX = useMemo(() => {
        if (ref.current && width >= 0) {
            const offsetWidth = ref.current.offsetWidth;
            return ((current * offsetWidth) * -1) + deltaX;
        }
        return 0;
    }, [current, ref, deltaX, width])


    return <div ref={ref}
                className={clsx(
                    'overflow-hidden',
                    'h-auto',
                    'bg-zinc-800/10',
                    'dark:bg-zinc-800/90'
                )}>
        <div

            className={clsx(
                'transition-all',
                'flex flex-row flex-nowrap',
            )}
            style={{transform: `translateX(${translateX}px)`}}>
            {
                blocks.map((block, index) => (
                    <div key={block.sysId}
                         className={clsx(
                             'grow',
                             'shrink-0',
                             'basis-full',
                         )}>
                        <BlocksBodyContentBlock block={block}/>
                    </div>
                ))
            }
        </div>

        <ul className={clsx(
            'py-4',
            'flex',
            'items-center justify-center',
            'gap-4',
            'list-none',
            'space-y-0'
        )}>
            {
                blocks.map((block, index) => {
                    return <li key={block.sysId}>
                        <button onClick={() => setCurrent(index)}
                                className={clsx(
                                    'daisyui-swap',
                                    'text-xl md:text-2xl',
                                    {
                                        ['daisyui-swap-active']: current === index
                                    }
                                )}>
                            <FaRegCircle className={clsx('daisyui-swap-off')}/>
                            <FaRegDotCircle className={clsx('daisyui-swap-on')}/>
                        </button>
                    </li>
                })
            }
        </ul>
    </div>
}

export {
    ColumnSlider
}