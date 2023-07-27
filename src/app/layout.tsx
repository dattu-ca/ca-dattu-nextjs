import {ReactElement} from "react";
import "tw-elements/dist/css/tw-elements.min.css";
import NavbarComponent from "~/components/Navbar";
import {getBlogNavbar, getSiteConfig} from "~/services";
import './globals.css';


export const generateMetadata = async () => {
    const data = await getSiteConfig('main-site-config');
    const {siteTitleDefault, siteTitleTemplate, siteDescription} = data;
    return {
        title: {
            template: siteTitleTemplate,
            default: siteTitleDefault,
        },
        description: siteDescription,
    }
}

interface IProps {
    children: ReactElement
}

const RootLayout = async ({children}: IProps) => {
    const navbar = await getBlogNavbar('header-navbar');
    return (
        <html lang="en">
        <body className={[].join(' ')}>
        <NavbarComponent navbar={navbar} data-superjson/>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}

export default RootLayout;