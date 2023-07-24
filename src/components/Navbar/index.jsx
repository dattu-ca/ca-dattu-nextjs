import Link from 'next/link'

import {getBlogPagesList} from "../../services/blogPages.services";

const NavbarComponent = async () => {
    const list = await getBlogPagesList();
    if(!list){
        return <p>Loading</p>;
    }
    return <nav>
        
        <ul>
            <li><Link href="/">Home</Link></li>
            {
                list.items.map(item => {
                    return <li key={item.fields.slug}>
                        <Link 
                            href={`/posts/${item.fields.slug}`}
                        >{item.fields.heading}</Link>
                    </li>
                })
            }
        </ul>
    </nav>
}

export default  NavbarComponent;