'use client';
import {Fragment, useMemo, useRef, useState} from 'react';
import clsx from "clsx";
import {FaRegCircle} from "react-icons/fa6";
import {FaRegDotCircle} from "react-icons/fa";
import {ColumnBlock, ColumnGaps} from "~/models";
import {BlocksBodyContentBlock} from "./block";


interface IProps {
    blocks: ColumnBlock[];
    gaps: ColumnGaps;
}

const ColumnSlider = ({blocks}: IProps) => {
    // @ts-ignore
    const ref = useRef<HTMLDivElement>(null)

    const [current, setCurrent] = useState(0);
    const [deltaX, setDeltaX] = useState(0);

    const translateX = useMemo(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth;
            return ((current * width) * -1) + deltaX;
        }
        return 0;
    }, [current, ref, deltaX])


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
            'gap-4'
        )}>
            {
                blocks.map((block, index) => {
                    return <Fragment key={block.sysId}>
                        <button onClick={() => setCurrent(index)} className={clsx(
                            'inline-grid',
                            'text-xl md:text-2xl'
                        )}>
                            <FaRegCircle
                                className={clsx(
                                    'transition duration-250 col-start-1 row-start-1',
                                    {
                                        ['opacity-1 rotate-0']: current !== index,
                                        ['opacity-0 rotate-45']: current === index
                                    }
                                )}
                            />
                            <FaRegDotCircle
                                className={clsx(
                                    'transition duration-250 col-start-1 row-start-1',
                                    {
                                        ['opacity-1 rotate-0']: current === index,
                                        ['opacity-0 rotate-45']: current !== index
                                    }
                                )}
                            />
                        </button>
                    </Fragment>
                })
            }
        </ul>
    </div>
}

export {
    ColumnSlider
}