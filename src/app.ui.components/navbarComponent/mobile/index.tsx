import React, {useEffect, useRef} from 'react';
import clsx from "clsx";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import {useNavbarContext} from "../context";
import {Close} from "./close";
import {Menu} from "./menu";

const MenuMobile = () => {
    const ref = useRef<HTMLDialogElement | null>(null)
    const {
        ctxData: {
            openMenuText,
            closeMenuText,
            isMobileMenuOpen,
        },
        ctxFunctions: {
            toggleMobileMenu,
            closeMobileMenu,
        }
    } = useNavbarContext();

    useEffect(() => {
        const closeModal = () => {
            closeMobileMenu();
        }
        // @ts-ignore
        ref.current?.addEventListener('close', closeModal)
        return () => {
            // @ts-ignore
            ref.current?.removeEventListener('close', closeModal)
        }
    }, [ref.current])

    useEffect(() => {
        if (ref.current) {
            if (isMobileMenuOpen) {
                ref.current?.showModal()
            } else {
                ref.current?.close()
            }
        }

    }, [isMobileMenuOpen, ref.current])

    return <div>
        <div role="menubar">
            <button
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}
                className={clsx(
                    'top-[30px] max-h-[calc(100vh - 60px)]',
                    'flex items-center justify-center gap-2',
                    'group rounded-2xl shadow-lg shadow-zinc-800/5 backdrop-blur transition',
                    ' p-1 md:px-3 md:pt-2 md:pb-2 ',
                    'bg-white/90 ring-1 ring-zinc-900/5',
                    'dark:bg-zinc-800/90 dark:ring-white/10 focus:hover:ring-white/20'
                )}
            >
                <span>Menu</span>
                <div className={clsx(
                    'inline-grid',
                )}>
                    <FaTimes
                        className={clsx(
                            'transition duration-250 col-start-1 row-start-1',
                            {
                                ['opacity-1 rotate-0']: isMobileMenuOpen,
                                ['opacity-0 rotate-45']: !isMobileMenuOpen
                            }
                        )}
                    />
                    <GiHamburgerMenu
                        className={clsx(
                            'transition duration-250 col-start-1 row-start-1',
                            {
                                ['opacity-1 rotate-0']: !isMobileMenuOpen,
                                ['opacity-0 rotate-45']: isMobileMenuOpen
                            }
                        )}
                    />
                </div>
            </button>

            <dialog ref={ref} className="daisyui-modal">
                <div
                    className={clsx(
                        'absolute',
                        'daisyui-modal-box',
                        'group rounded-xl shadow-lg shadow-zinc-800/5 backdrop-blur transition',
                        'bg-white/90 ring-zinc-900/5',
                        'dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
                        {
                            ['ring-1']: isMobileMenuOpen,
                            ['h-0 overflow-hidden ring-0']: !isMobileMenuOpen
                        }
                    )}
                    style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                    <Close/>
                    <Menu/>
                </div>
                <form method="dialog" className="daisyui-modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div>
    </div>
}

export {MenuMobile};