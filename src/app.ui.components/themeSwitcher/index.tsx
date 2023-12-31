"use client";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import clsx from "clsx";
import {BsMoonFill, BsSun} from "react-icons/bs";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);
    
    useEffect(() => {
        if(theme){
            document.querySelector('html')?.setAttribute('data-theme', theme);
        }
    }, [theme])

    if (!mounted) {
        return null;
    }

    return (
        <button
            aria-label={`Set theme to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={clsx(
                'daisyui-btn daisyui-btn-circle',
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <div className={clsx(
                'daisyui-swap daisyui-swap-rotate',
                {
                    ['daisyui-swap-active']: theme === "dark"
                }
            )}>
                <BsSun className={clsx(
                    'daisyui-swap-on'
                )}/>
                <BsMoonFill className={clsx(
                    'daisyui-swap-off'
                )}/>
            </div>
        </button>
    );
};