import {createContext, ReactElement, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {IBlogNavbar, ISiteConfig} from "~/models";
import {usePathname} from "next/navigation";


interface INavbarContextProps {
    siteConfig: ISiteConfig;
    navbar: IBlogNavbar;
    desktopSubMenuOpenId: string | undefined;
    openDesktopSubMenu: (id: string) => void;
    closeDesktopSubMenu: () => void;
    toggleDesktopSubMenu: (id: string) => void;
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
    mobileSubMenuOpenIds: string[];
    openMobileSubMenu: (id: string) => void;
    closeMobileSubMenu: (id: string) => void;
    toggleMobileSubMenu: (id: string) => void;
    closeAllMobileSubMenus: () => void;
    isCurrentPage: (value: string) => boolean;
    getAriaCurrent: (value: string) => 'page' | undefined;
}

const NavbarContext = createContext<INavbarContextProps>({
    siteConfig: {},
    navbar: {navLinks: []},
    desktopSubMenuOpenId: undefined,
    openDesktopSubMenu: () => ({}),
    closeDesktopSubMenu: () => ({}),
    toggleDesktopSubMenu: () => ({}),
    isMobileMenuOpen: false,
    openMobileMenu: () => ({}),
    closeMobileMenu: () => ({}),
    toggleMobileMenu: () => ({}),
    mobileSubMenuOpenIds: [],
    openMobileSubMenu: () => ({}),
    closeMobileSubMenu: () => ({}),
    toggleMobileSubMenu: () => ({}),
    closeAllMobileSubMenus: () => ({}),
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
    const [desktopSubMenuOpenId, setIsDesktopSubMenuOpenId] = useState<string | undefined>(undefined);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [mobileSubMenuOpenIds, setMobileSubMenuOpenIds] = useState<string[]>([]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            setMobileSubMenuOpenIds([])
        }
    }, [isMobileMenuOpen]);

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
        desktopSubMenuOpenId: desktopSubMenuOpenId,
        openDesktopSubMenu: (id: string) => setIsDesktopSubMenuOpenId(id),
        closeDesktopSubMenu: () => setIsDesktopSubMenuOpenId(undefined),
        toggleDesktopSubMenu: (id: string) => setIsDesktopSubMenuOpenId(prev => prev === id ? undefined : id),
        isMobileMenuOpen: isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
        mobileSubMenuOpenIds: mobileSubMenuOpenIds,
        openMobileSubMenu: (id: string) => setMobileSubMenuOpenIds(prev => prev.includes(id) ? prev : [...prev, id]),
        closeMobileSubMenu: (id: string) => setMobileSubMenuOpenIds(prev => prev.filter(item => item !== id)),
        toggleMobileSubMenu: (id: string) => setMobileSubMenuOpenIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]),
        closeAllMobileSubMenus: () => setMobileSubMenuOpenIds([]),
        isCurrentPage: isCurrentPage,
        getAriaCurrent: getAriaCurrent,
    } as INavbarContextProps), [siteConfig, navbar, desktopSubMenuOpenId, isMobileMenuOpen, mobileSubMenuOpenIds, isCurrentPage, getAriaCurrent]);


    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}


export {NavbarContextProvider, useNavbarContext}