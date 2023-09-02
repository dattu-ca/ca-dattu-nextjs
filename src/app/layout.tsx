import {ReactElement} from "react";
import clsx from "clsx";

import {getSiteConfig} from "~/services";
import './globals.css';
import {CONTENTFUL_SLUGS} from "~/utils/constants";

const {PRIMARY_SITE_CONFIG} = CONTENTFUL_SLUGS;


export const generateMetadata = async () => {
    const data = await getSiteConfig(PRIMARY_SITE_CONFIG);
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
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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