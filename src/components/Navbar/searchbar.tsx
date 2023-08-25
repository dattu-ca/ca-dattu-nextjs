import React from 'react';
import clsx from "clsx";
import {ReactIcon} from "~/components/ReactIcon";
import {useNavbarContext} from "~/components/Navbar/context";


const Searchbar = () => {
    const {siteConfig} = useNavbarContext();
    return <div className="flex flex-nowrap">
        <input
            type="text"
            className={clsx(
                'w-[150px] ',
                'focus:w-[500px] ',
                'flex-grow',
                'block rounded-l-xl ',
                'outline-none border-site-secondary border-0 border-r-[1px] border-solid ',
                'bg-white bg-clip-padding pl-3 pr-1 py-[0.25rem] ',
                'text-base font-normal leading-[1.6] ',
                'focus:outline-none',
                'transition-all duration-200 ease-in-out ',
                'drop-shadow-xl ',
            )}
            placeholder={siteConfig.searchLabel}
            aria-label={siteConfig.searchLabel}/>
        <button
            className={clsx(
                'group ',
                'inline-block rounded-r-xl p-2 ',
                'text-site-secondary ',
                'bg-white ',
                'drop-shadow-xl ',
                'hover:drop-shadow-2xl ',
                
            )}>
            <ReactIcon icon='BiSearchAlt' className='w-6 h-6 group-hover:scale-110 transition-all'/>
        </button>
    </div>
}

export { Searchbar };