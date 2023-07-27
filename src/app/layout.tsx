import {ReactElement} from "react";
import "tw-elements/dist/css/tw-elements.min.css";
import NavbarComponent from "~/components/Navbar";
import {getBlogNavbar} from "~services/blogNavbar.services";
import './globals.css';

export const metadata = {
    title: {
        template: '%s | dattu.ca',
        default: 'dattu.ca',
    },
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