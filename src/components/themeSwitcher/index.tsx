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
                'group rounded-full px-3 py-2 shadow-lg shadow-zinc-800/5  backdrop-blur transition',
                'bg-white/90 ring-1 ring-zinc-900/5',
                'dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <BsSun/> : <BsMoonFill/>}
        </button>
    );
};