'use client';
import clsx from "clsx";
import Link from "next/link";
import {DesktopMenu} from "./desktopMenu";
import {Logo} from "./logo";


const Navbar = () => {
    return (
        <div className={clsx(
            'mb-24'
        )}>
            <nav className={clsx(
                'w-full bg-site-color-dark',
                'py-4 px-4 mb-4',
                'shadow-2xl',
                'fixed top-0 left-0'
            )}
                 style={{ '--tw-bg-opacity': 0.95}}>
                <div className={clsx(
                    'flex justify-between items-center',
                )}>
                    <div>
                        <Link href='/'
                              className={clsx(
                                  'hover:after:w-0',
                                  'hover:skew-y-12'
                              )}>
                            <Logo/>
                        </Link>
                    </div>
                    <div>
                        <DesktopMenu/>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export {Navbar};