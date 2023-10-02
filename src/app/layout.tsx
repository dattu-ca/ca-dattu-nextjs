import {ReactElement} from "react";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

import {ToastContainer} from "react-toastify";
import dbConnect from "~/services.db/dbConnect";
import {siteConfigServices, siteNavbarServices} from "~/services";
import {getAuthSession} from "~/auth.services";
import {SERVER_CONFIG} from "~/utils/config.server";
import "~/utils/dayjs.config";


import {ThemeSwitcherProvider} from "~/app.ui.components/themeSwitcher/provider";
import NavbarComponent from "~/app.ui.components/navbarComponent";
import {SkipLink} from "~/app.ui.components/skipLink";
import {RootLayoutComponent} from "~/app.ui.components/rootLayout";
import clsx from "clsx";


const {PRIMARY_SITE_CONFIG, HEADER_SITE_NAVBAR} = SERVER_CONFIG.CONTENTFUL_SLUGS;


export const generateMetadata = async () => {
    const data = await siteConfigServices.fetchBySlug(PRIMARY_SITE_CONFIG);
    if(!data){
        return {};
    }
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
    children: ReactElement | ReactElement[];
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
        <body className={clsx(
            'flex h-full ',
            'bg-zinc-50 dark:bg-black',
            'dark:text-zinc-100',
            'min-h-[100vh]'
        )}>
        <ThemeSwitcherProvider>
            <SkipLink skipToId='mainContent'/>
            <RootLayoutComponent>
                <header>
                    {
                        navbar && <NavbarComponent navbar={navbar} session={session} data-superjson/> 
                    }
                </header>
                <main id="mainContent" className={clsx('h-full')}>
                    {children}
                </main>
            </RootLayoutComponent>
            <ToastContainer/>
        </ThemeSwitcherProvider>
        </body>
        </html>
    )
}

export default RootLayout;