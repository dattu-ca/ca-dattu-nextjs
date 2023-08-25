import {createContext, ReactElement, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {IBlogNavbar, ISiteConfig} from "~/models";
import {usePathname} from "next/navigation";


interface INavbarContextProps {
    siteConfig: ISiteConfig;
    navbar: IBlogNavbar;    
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
    isCurrentPage: (value: string) => boolean;
    getAriaCurrent: (value: string) => 'page' | undefined;
}

const NavbarContext = createContext<INavbarContextProps>({
    siteConfig: {},
    navbar: {navLinks: []},
    desktopSubMenuOpenId: undefined,
    isMobileMenuOpen: false,
    openMobileMenu: () => ({}),
    closeMobileMenu: () => ({}),
    toggleMobileMenu: () => ({}),
    isCurrentPage: () => false,
    getAriaCurrent: () => undefined,
} as INavbarContextProps)

const useNavbarContext = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error('useNavbarContext must be used within NavbarContextProvider')
    }
    return context;
};

interface INavbarContextProviderProps {
    children: ReactElement,
    siteConfig: {},
    navbar: {}
}

const NavbarContextProvider = ({children, siteConfig, navbar}: INavbarContextProviderProps) => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);


    const path = usePathname();

    const isCurrentPage = useCallback((url: string) => {
        if (!url) {
            return false;
        }
        if (url === '/') {
            return path === url;
        }
        return path.includes(url)
    }, [path]);
    const getAriaCurrent = useCallback((url: string) => isCurrentPage(url) ? 'page' : undefined, [isCurrentPage])


    const props = useMemo<INavbarContextProps>(() => ({
        siteConfig: siteConfig,
        navbar: navbar,
        isMobileMenuOpen: isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
        isCurrentPage: isCurrentPage,
        getAriaCurrent: getAriaCurrent,
    } as INavbarContextProps), [siteConfig, navbar, isMobileMenuOpen, isCurrentPage, getAriaCurrent]);


    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}


export {NavbarContextProvider, useNavbarContext}