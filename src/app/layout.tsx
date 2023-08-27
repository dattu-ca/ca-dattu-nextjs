import {ReactElement} from "react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import NavbarComponent from "~/components/Navbar";
import {getBlogNavbar, getSiteConfig} from "~/services";
import './globals.css';
import {CONTENTFUL_SLUGS} from "~/utils/constants";
import clsx from "clsx";


export const generateMetadata = async () => {
    const data = await getSiteConfig(CONTENTFUL_SLUGS.MAIN_SITE_CONFIG);
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
    children: ReactElement;
}

const RootLayout = async ({children}: IProps) => {
    const navbar = await getBlogNavbar(CONTENTFUL_SLUGS.MAIN_NAV_BAR);
    const siteConfig = await getSiteConfig(CONTENTFUL_SLUGS.MAIN_SITE_CONFIG);
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={clsx(
            'bg-site-color-light text-site-tertiary'
        )}>
        <header>
            <div>
                <a href="#mainContent"
                   className={clsx(
                       'transition-all',
                       'fixed z-[999]',
                       'top-0 left-[50%] translate-x-[-50%]',
                       'translate-y-[-100%]',
                       'focus:translate-y-1.5'
                   )}>Skip to main Content</a>
            </div>
            <NavbarComponent navbar={navbar} siteConfig={siteConfig} data-superjson/>
        </header>
        <main id="mainContent"
              className={clsx(

              )}>
            {children}
        </main>
        </body>
        </html>
    )
}

export default RootLayout;