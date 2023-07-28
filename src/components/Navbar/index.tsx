'use client';
import Link from "next/link";
import MenuItem from "~/components/Navbar/menuItem";
import MobileMenuComponent from "./mobileMenu";
import {Bars3} from "~/assets/SVGs";
import {IBlogNavbar} from "~/models";
import {useState} from "react";

interface IProps {
    navbar: IBlogNavbar;
}

const NavbarComponent = ({navbar}: IProps) => {
    const [open, setOpen] = useState(false);
    return <nav className="border-b-[1px] border-neutral-200 py-4 bg-[rgba(0,0,0,0.0)]">
        <div className="max-w-[100%] px-4 md:px-0 md:container my-0 mx-auto flex justify-between items-center">
            <div>
                <Link href='/' className='after:hover:w-0'>
                    <picture className='block w-[100%] h-[100%]'>
                        <source
                            media="(max-width: 768px)"
                            srcSet={`${navbar.logo?.mobileImage?.url} 768w`}
                            sizes="768px"
                            className='w-[50px] h-[50px]'
                        />
                        <source
                            srcSet={`${navbar.logo?.desktopImage?.url} 1280w`}
                            sizes="1280px"
                        />
                        <img src={navbar.logo?.desktopImage?.url}
                             alt={navbar.logo?.desktopImage?.alt}
                             className='h-auto max-w-none w-[50px] sm:w-[100px] md:w-[150px]'
                             width={50}
                             height={50}
                        />
                    </picture>
                </Link>
            </div>
            <div className='hidden md:block'>
                <ul className="flex justify-end list-none space-x-4">
                    {
                        navbar.navLinks.map(link => <MenuItem link={link} key={link.url}/>)
                    }
                </ul>
            </div>
            <div className='block md:hidden'>
                <button onClick={() => setOpen(prev => !prev)}
                        aria-label={navbar.openMenuText}
                        role='button'>
                    <Bars3/>
                </button>
            </div>
        </div>
        <div className='block md:hidden'>
            <MobileMenuComponent navLinks={navbar.navLinks} 
                                 open={open} 
                                 setClose={() => setOpen(false)}
                                 closeMenuText={navbar.closeMenuText}
                                 expandSubMenuText={navbar.expandSubMenuText}
                                 collapseSubMenuText={navbar.collapseSubMenuText} />
        </div>
    </nav>
}

export default NavbarComponent;