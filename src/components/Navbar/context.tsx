import {createContext} from "react";
import {ISiteConfig} from "~/models";


interface INavbarContextProps {
    siteConfig: ISiteConfig;
}
const NavbarContext = createContext<INavbarContextProps>({
    siteConfig: {}
}) 

export {NavbarContext}