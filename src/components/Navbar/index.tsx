import Link from 'next/link'

import {getBlogPagesList} from "~/services/blogPages.services";




const NavbarComponent = async () => {
    const list = await getBlogPagesList();
    return <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            {
                (list || []).map(item => {
                    return <li key={item.slug}>
                        <Link 
                            href={`/pages/${item.slug}`}
                        >
                            {item.heading}
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>
}

export default  NavbarComponent;