import React from "react";
import clsx from "clsx";
import {FaTimes} from "react-icons/fa";
import {useNavbarContext} from "../context";

const Close = () => {
    const {
        ctxData: {
            isMobileMenuOpen,
            closeMenuText
        },
        ctxFunctions: {
            closeMobileMenu,
        }
    } = useNavbarContext();
    return (
        <div
            className={clsx(
                'py-4',
                'flex justify-space-between items-center',
            )}>
                        <span className={clsx(
                            'flex-1 text-left',
                            'text-slate-500'
                        )}>
                            Navigation
                        </span>
            <button onClick={closeMobileMenu}
                    tabIndex={isMobileMenuOpen ? undefined : -1}
                    aria-label={closeMenuText}>
                <FaTimes
                    className={clsx(
                        'transition duration-250 col-start-1 row-start-1',
                        {
                            ['opacity-1 rotate-0']: isMobileMenuOpen,
                            ['opacity-0 rotate-45']: !isMobileMenuOpen
                        }
                    )}
                />
            </button>

        </div>
    )
}

export {
    Close
}