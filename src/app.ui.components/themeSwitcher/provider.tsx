'use client';
import {ThemeProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";


const ThemeSwitcherProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider {...props} attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}
export {
    ThemeSwitcherProvider
}