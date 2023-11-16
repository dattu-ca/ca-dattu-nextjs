import {ReactElement} from "react";
import {Analytics} from '@vercel/analytics/react';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

import {ToastContainer} from "react-toastify";
import dbConnect from "~/services.db/dbConnect";
import {siteConfigServices, siteNavbarServices, siteFooterServices} from "~/services";
import {getAuthSession} from "~/auth.services";
import "~/utils/dayjs.config";


import {ThemeSwitcherProvider} from "~/app.ui.components/themeSwitcher/provider";
import NavbarComponent from "~/app.ui.components/navbarComponent";
import {SkipLink} from "~/app.ui.components/skipLink";
import {RootLayoutComponent} from "~/app.ui.components/rootLayout";
import clsx from "clsx";
import GoogleAnalytics from "./googleAnalytics";
import {FooterComponent} from "~/app.ui.components/footerComponent";


export const revalidate = 86400;
export const generateMetadata = async () => {
    const cmsContent = await siteConfigServices.fetch();
    if (!cmsContent) {
        return {};
    }
    const {
        siteTitleDefault,
        siteTitleTemplate,
        siteDescription
    } = cmsContent;
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
    const navbar = await siteNavbarServices.fetch();
    const footer = await siteFooterServices.fetch();
    const session = await getAuthSession();
    return (
        <html lang="en" suppressHydrationWarning className='h-full antialiased'>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="robots" content="noindex,nofollow"/>
        </head>
        <body className={clsx(
            'flex min-h-full ',
        )}>
        <ThemeSwitcherProvider>
            <SkipLink skipToId='mainContent'/>
            <RootLayoutComponent>
                <header>
                    {
                        navbar && <NavbarComponent navbar={navbar}
                                                   session={session}
                                                   data-superjson/>
                    }
                </header>
                <main id="mainContent" className={clsx('h-full mb-8')}>
                    {children}
                </main>
                <footer>
                    <FooterComponent footer={footer}/>
                </footer>
            </RootLayoutComponent>
            <ToastContainer/>
        </ThemeSwitcherProvider>
        <Analytics/>
        <GoogleAnalytics/>
        </body>
        </html>
    )
}

export default RootLayout;