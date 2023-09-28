import {Fragment, ReactElement} from "react";
import clsx from "clsx";
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

import {getAuthSession} from "~/auth.services";
import {siteConfigServices, siteNavbarServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import NavbarComponent from "~/components/navbar";
import dbConnect from "~/services.db/dbConnect";

import './dayjs.config';
import {ThemeProvider} from "./theme-provider";
import {LayoutBackground} from "./layoutBackground";


const {PRIMARY_SITE_CONFIG, HEADER_SITE_NAVBAR} = SERVER_CONFIG.CONTENTFUL_SLUGS;


export const generateMetadata = async () => {
    const data = await siteConfigServices.fetchBySlug(PRIMARY_SITE_CONFIG);
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
    await dbConnect();
    const navbar = await siteNavbarServices.fetchBySlug(HEADER_SITE_NAVBAR);
    const session = await getAuthSession();
    return (

        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="robots" content="noindex,nofollow"/>
        </head>
        <body
            className={`flex h-full bg-zinc-50 dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LayoutBackground>
                <Fragment>
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
                        <NavbarComponent navbar={navbar} session={session} data-superjson/>
                    </header>
                    <main id="mainContent"
                          className={clsx()}>
                        {/*{children}*/}
                    </main>
                </Fragment>
            </LayoutBackground>
            <ToastContainer/>
        </ThemeProvider>
        </body>
        </html>
    )
}

export default RootLayout;