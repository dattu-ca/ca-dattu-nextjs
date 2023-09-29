import {ReactElement} from "react";
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ToastContainer} from "react-toastify";
import dbConnect from "~/services.db/dbConnect";
import {siteConfigServices, siteNavbarServices} from "~/services";
import {getAuthSession} from "~/auth.services";
import {SERVER_CONFIG} from "~/utils/config.server";
import "~/utils/dayjs.config";


import {ThemeSwitcherProvider} from "~/app.ui.components/themeSwitcher/provider";
import NavbarComponent from "~/app.ui.components/navbarComponent";
import {SkipLink} from "~/app.ui.components/skipLink";
import {LayoutBackground} from "~/app.ui.components/layoutBackground";


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
            <body className={`flex h-full bg-zinc-50 dark:bg-black`}>
                <ThemeSwitcherProvider>
                    <SkipLink skipToId='mainContent'/>
                    <LayoutBackground>
                        <header>
                            <NavbarComponent navbar={navbar} session={session} data-superjson/>
                        </header>
                        <main id="mainContent">
                            {children}
                        </main>
                    </LayoutBackground>
                    <ToastContainer/>
                </ThemeSwitcherProvider>
            </body>
        </html>
    )
}

export default RootLayout;