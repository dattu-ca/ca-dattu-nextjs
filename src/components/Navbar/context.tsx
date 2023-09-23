import {createContext, ReactElement, useCallback, useContext, useMemo, useState} from "react";
import {IBodyImage, ILink, ISiteNavbar} from "~/models";
import {usePathname} from "next/navigation";
import {Session} from "next-auth";


const AUTH_LINKS = [
    {
        url: '/admin/dashboard',
        label: 'Dashboard'
    },
    {
        url: '/admin/profile',
        label: 'Profile'
    },
    {
        url: '/api/auth/signout',
        label: 'Signout'
    }
];

interface INavbarContextProps {
    ctxData: {
        logo: IBodyImage;
        openMenuText: string;
        closeMenuText: string;
        links: ILink[];
        authLinks: ILink[];
        isMobileMenuOpen: boolean;
        session: Session | null;
        subMenuOpenId: string | null;
    },
    ctxFunctions: {
        openMobileMenu: () => void;
        closeMobileMenu: () => void;
        toggleMobileMenu: () => void;
        isCurrentPage: (value: string) => boolean;
        getAriaCurrent: (value: string) => 'page' | undefined;
        openSubMenu: (id: string) => void,
        closeSubMenu: (id: string | null) => void,
        toggleSubMenu: (id: string) => void,
    }
}

const NavbarContext = createContext<INavbarContextProps>({
    ctxData: {
        logo: {},
        openMenuText: 'Open Menu',
        closeMenuText: 'CLose Menu',
        links: [],
        authLinks: [],
        isMobileMenuOpen: false,
        session: null,
        subMenuOpenId: null,
    },
    ctxFunctions: {
        openMobileMenu: () => ({}),
        closeMobileMenu: () => ({}),
        toggleMobileMenu: () => ({}),
        isCurrentPage: () => false,
        getAriaCurrent: () => undefined,
        openSubMenu: () => ({}),
        closeSubMenu: () => ({}),
        toggleSubMenu: () => ({}),
    },


} as INavbarContextProps)

const useNavbarContext = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error('useNavbarContext must be used within NavbarContextProvider')
    }
    return context;
};

interface INavbarContextProviderProps {
    children: ReactElement;
    navbar: {};
    session: Session | null;
}

const NavbarContextProvider = ({children, navbar: rawNavbar, session}: INavbarContextProviderProps) => {
    const navbar = rawNavbar as ISiteNavbar;

    const path = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [subMenuOpenId, setSubMenuOpenId] = useState<string | null>(null);

    const closeMobileMenuHandler = useCallback(() => {
        setIsMobileMenuOpen(false);
        setSubMenuOpenId(null);
    }, []);

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
    const getAriaCurrent = useCallback((url: string) => isCurrentPage(url, true) ? 'page' : undefined, [isCurrentPage]);

    const openSubMenuHandler = useCallback((id: string) => {
        setSubMenuOpenId(id);
    }, [])

    const closeSubMenuHandler = useCallback((id: string | null) => {
        setSubMenuOpenId(prev => {
            if (!id || prev === id) {
                return null;
            }
            return prev;
        });
    }, [])

    const toggleSubMenuHandler = useCallback((id: string) => {
        setSubMenuOpenId(prev => {
            if (prev === id) {
                return null;
            }
            return id;
        });
    }, [])

    const props = useMemo<INavbarContextProps>(() => ({
        ctxData: {
            logo: navbar.logo,
            openMenuText: navbar.openMenuText,
            closeMenuText: navbar.closeMenuText,
            links: navbar.links.links || [],
            authLinks: AUTH_LINKS,
            isMobileMenuOpen: isMobileMenuOpen,
            session,
            subMenuOpenId,
        },
        ctxFunctions: {
            openMobileMenu: () => setIsMobileMenuOpen(true),
            closeMobileMenu: closeMobileMenuHandler,
            toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
            isCurrentPage: isCurrentPage,
            getAriaCurrent: getAriaCurrent,
            openSubMenu: openSubMenuHandler,
            closeSubMenu: closeSubMenuHandler,
            toggleSubMenu: toggleSubMenuHandler,
        },
    } as INavbarContextProps), [session, navbar, isMobileMenuOpen, isCurrentPage, closeMobileMenuHandler, getAriaCurrent, subMenuOpenId, openSubMenuHandler, closeSubMenuHandler, toggleSubMenuHandler]);


    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}


export {NavbarContextProvider, useNavbarContext}