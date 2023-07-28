import {ReactElement} from "react";
import "tw-elements/dist/css/tw-elements.min.css";
import NavbarComponent from "~/components/Navbar";
import {getBlogNavbar, getSiteConfig} from "~/services";
import './globals.css';
import {CONTENTFUL_SLUGS} from "~/utils/constants";


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
    children: ReactElement
}

const RootLayout = async ({children}: IProps) => {
    const navbar = await getBlogNavbar(CONTENTFUL_SLUGS.MAIN_NAV_BAR);
    const siteConfig = await getSiteConfig(CONTENTFUL_SLUGS.MAIN_SITE_CONFIG);
    return (
        <html lang="en">
            <body className={[].join(' ')}>
                <NavbarComponent navbar={navbar} siteConfig={siteConfig} data-superjson/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;