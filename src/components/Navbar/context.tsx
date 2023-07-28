import {createContext, ReactElement, useContext, useMemo, useState} from "react";
import {IBlogNavbar, ISiteConfig} from "~/models";


interface INavbarContextProps {
    siteConfig: ISiteConfig;
    navbar: IBlogNavbar;
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
}

const NavbarContext = createContext<INavbarContextProps>({
    siteConfig: {},
    navbar: {},
    isMobileMenuOpen: false,
    openMobileMenu: () => ({}),
    closeMobileMenu: () => ({}),
    toggleMobileMenu: () => ({}),
} as INavbarContextProps)

const useNavbarContext = () => {
    const context = useContext(NavbarContext);
    if(!context){
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const props = useMemo<INavbarContextProps>(() =>({
        siteConfig: siteConfig,
        navbar: navbar,
        isMobileMenuOpen: isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
    } as INavbarContextProps), [siteConfig, navbar, isMobileMenuOpen]);
    
    
    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}



export {NavbarContextProvider, useNavbarContext}