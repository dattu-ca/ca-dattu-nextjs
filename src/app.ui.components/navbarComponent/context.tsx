import {createContext, ReactElement, useCallback, useContext, useMemo, useState} from "react";
import {usePathname} from "next/navigation";
import {Session} from "next-auth";
import {BodyImage, ILink, SiteNavbar} from "~/models";


interface INavbarContextProps {
    ctxData: {
        logo: Partial<BodyImage>;
        openMenuText: string;
        closeMenuText: string;
        links: ILink[];
        adminLinks: ILink[];
        isMobileMenuOpen: boolean;
        session: Session | null;
        subMenuOpenId: string | null;
        mobileSubMenuOpenIds: string[];
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
        openMobileSubMenu: (id: string) => void,
        closeMobileSubMenu: (id: string) => void,
        toggleMobileSubMenu: (id: string) => void,
        closeAllMobileSubMenu: () => void,
    }
}

const NavbarContext = createContext<INavbarContextProps>({
    ctxData: {
        logo: {},
        openMenuText: 'Open Menu',
        closeMenuText: 'CLose Menu',
        links: [],
        adminLinks: [],
        isMobileMenuOpen: false,
        session: null,
        subMenuOpenId: null,
        mobileSubMenuOpenIds: []
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
        openMobileSubMenu: () => ({}),
        closeMobileSubMenu: () => ({}),
        toggleMobileSubMenu: () => ({}),
        closeAllMobileSubMenu: () => ({}),
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
    children: ReactElement | ReactElement[];
    navbar: {};
    session: Session | null;
}

const NavbarContextProvider = ({children, navbar: rawNavbar, session}: INavbarContextProviderProps) => {
    const navbar = rawNavbar as SiteNavbar;

    const path = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [subMenuOpenId, setSubMenuOpenId] = useState<string | null>(null);
    const [mobileSubMenuOpenIds, setMobileSubMenuOpenIds] = useState<string[]>([]);

    const closeMobileMenuHandler = useCallback(() => {
        setIsMobileMenuOpen(false);
        setSubMenuOpenId(null);
        setMobileSubMenuOpenIds([]);
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
        /**
         * Special exception for when the user is viewing a POST page, the `blog` link will be underlined.
         */
        if (url.includes('/posts') && path.includes('/post/')) {
            return true;
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
    }, []);

    const openMobileSubMenuHandler = useCallback((id: string) => {
        setMobileSubMenuOpenIds(prev => [...prev.filter(item => item !== id), id]);
    }, []);

    const closeMobileSubMenuHandler = useCallback((id: string) => {
        setMobileSubMenuOpenIds(prev => prev.filter(item => item !== id))
    }, []);

    const toggleMobileSubMenuHandler = useCallback((id: string) => {
        setMobileSubMenuOpenIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    }, []);

    const closeAllMobileSubMenuHandler = useCallback(() => {
        setMobileSubMenuOpenIds([]);
    }, [])

    const adminLinks: ILink[] = useMemo(() => {
        return session
            ? navbar.showLinksAdminAuthenticated ? navbar.linksAdminAuthenticated.links : []
            : navbar.showLinksAdminUnauthenticated ? navbar.linksAdminUnauthenticated.links : [];
    }, [session, navbar])

    const props = useMemo<INavbarContextProps>(() => ({
        ctxData: {
            session,
            logo: navbar.logo,
            openMenuText: navbar.openMenuText,
            closeMenuText: navbar.closeMenuText,
            links: navbar.links.links || [],
            adminLinks,
            isMobileMenuOpen,
            subMenuOpenId,
            mobileSubMenuOpenIds,
        },
        ctxFunctions: {
            openMobileMenu: () => setIsMobileMenuOpen(true),
            closeMobileMenu: closeMobileMenuHandler,
            toggleMobileMenu: () => setIsMobileMenuOpen(prev => !prev),
            isCurrentPage: isCurrentPage,
            getAriaCurrent,
            openSubMenu: openSubMenuHandler,
            closeSubMenu: closeSubMenuHandler,
            toggleSubMenu: toggleSubMenuHandler,
            openMobileSubMenu: openMobileSubMenuHandler,
            closeMobileSubMenu: closeMobileSubMenuHandler,
            toggleMobileSubMenu: toggleMobileSubMenuHandler,
            closeAllMobileSubMenu: closeAllMobileSubMenuHandler,
        },
    } as INavbarContextProps), [
        session,
        navbar,
        adminLinks,
        isMobileMenuOpen,
        subMenuOpenId,
        mobileSubMenuOpenIds,
        closeMobileMenuHandler,
        isCurrentPage,
        getAriaCurrent,
        openSubMenuHandler,
        closeSubMenuHandler,
        toggleSubMenuHandler,
        openMobileSubMenuHandler,
        closeMobileSubMenuHandler,
        toggleMobileSubMenuHandler,
        closeAllMobileSubMenuHandler
    ]);


    return <NavbarContext.Provider value={props}>
        {children}
    </NavbarContext.Provider>
}


export {NavbarContextProvider, useNavbarContext}