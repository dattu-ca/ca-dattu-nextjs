import {createContext, ReactElement, useCallback, useContext, useMemo, useState} from "react";
import {IBodyImage, ILink, ISiteNavbar} from "~/models";
import {usePathname} from "next/navigation";


interface INavbarContextProps {
    logo: IBodyImage;
    openMenuText: string;
    closeMenuText: string;
    links: ILink[];
    
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
    isCurrentPage: (value: string) => boolean;
    getAriaCurrent: (value: string) => 'page' | undefined;
}

const NavbarContext = createContext<INavbarContextProps>({
    logo: {},
    openMenuText: 'Open Menu',
    closeMenuText: 'CLose Menu',
    links: [],
    
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
    navbar: {}
}

const NavbarContextProvider = ({children, navbar: rawNavbar}: INavbarContextProviderProps) => {
    const navbar = rawNavbar as ISiteNavbar;

    const path = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const isCurrentPage = useCallback((url: string, exact: boolean = false) => {
        if (!url) {
            return false;
        }
        if (url === '/') {
            return path === url;
        }
        if (exact) {
            return path === url;
        }
        return path.includes(url)
    }, [path]);
    const getAriaCurrent = useCallback((url: string) => isCurrentPage(url, true) ? 'page' : undefined, [isCurrentPage])


    const props = useMemo<INavbarContextProps>(() => ({
        logo: navbar.logo,
        openMenuText: navbar.openMenuText,
        closeMenuText: navbar.closeMenuText,
        links: navbar.links.links || [],
        isMobileMenuOpen: isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
        isCurrentPage: isCurrentPage,
        getAriaCurrent: getAriaCurrent,
    } as INavbarContextProps), [navbar, isMobileMenuOpen, isCurrentPage, getAriaCurrent]);


    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}


export {NavbarContextProvider, useNavbarContext}