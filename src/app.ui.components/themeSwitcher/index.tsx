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

    if (!mounted) {
        return null;
    }

    return (
        <button
            aria-label={`Set theme to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={clsx(
                'daisyui-btn daisyui-btn-circle',
                'dark:text-zinc-100',
                'bg-white/90',
                'dark:bg-zinc-800/90'
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <div className={clsx(
                'daisyui-swap daisyui-swap-rotate',
            )}>
                <input type="checkbox" checked={theme === 'dark'} onChange={() => ({})}/>
                <BsSun className={clsx('daisyui-swap-off')}/>
                <BsMoonFill className={clsx('daisyui-swap-on')}/>
            </div>
        </button>
    );
};