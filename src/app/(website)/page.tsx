import clsx from "clsx";
import { getProjects } from '~/sanity/utils'
import {Fragment} from "react";


const Page = async () => {
    const data = await getProjects();
    return <div>
        <p>My projects go here.</p>
        <div className={clsx()}>
            <div>
                {data.map(project => (
                    <Fragment key={project.slug}>
                        <h1>{project.name}</h1>
                    </Fragment>
                ))}
            </div>
        </div>
    </div>
}

export default Page;
