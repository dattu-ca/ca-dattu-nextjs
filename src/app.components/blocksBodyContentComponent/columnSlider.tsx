'use client';
import './columnSlider.css';
import {useMemo, useRef, useState} from 'react';
import clsx from "clsx";
import {FaRegCircle} from "react-icons/fa6";
import {FaRegDotCircle} from "react-icons/fa";
import {BlocksBodyContent_ContentType} from "~/models";
import {BlocksBodyContentBlock} from "./block";
import {useWindowDimensions} from "~/hooks/useWindowDimensions";
import {wrap} from "popmotion";
import * as React from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";


interface IProps {
    blocks: BlocksBodyContent_ContentType[];
}

const ColumnSlider = ({blocks}: IProps) => {
    // @ts-ignore
    const ref = useRef<HTMLDivElement>(null)

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, blocks.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    
    const onDotClick = (index:number) => {
        setPage(prev => [index, prev[1]]);
    }
    
    

    const {width} = useWindowDimensions();

    const translateX = useMemo(() => {
        if (ref.current && width >= 0) {
            const offsetWidth = ref.current.offsetWidth;
            return ((imageIndex * offsetWidth) * -1);
        }
        return 0;
    }, [imageIndex, ref, width])


    return <div ref={ref}
                className={clsx(
                    'overflow-hidden',
                    'relative',
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
        <div className="prev" 
             onClick={() => paginate(-1)}>
            <BsChevronCompactLeft/>
        </div>
        <div className="next"
             onClick={() => paginate(1)}>
            <BsChevronCompactRight/>
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
                        <button onClick={() => onDotClick(index)}
                                className={clsx(
                                    'daisyui-swap',
                                    'text-xl md:text-2xl',
                                    {
                                        ['daisyui-swap-active']: imageIndex === index
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