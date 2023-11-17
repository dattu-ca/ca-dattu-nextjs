import {BodyPostsList} from "~/models";
import {BodyPostsListExcerptsComponent} from "./excerptsList";
import {BodyPostsListHeadingsOnlyComponent} from "./headingsOnly";
import clsx from "clsx";


interface IProps {
    data: BodyPostsList
}

const BodyPostsListComponent = ({data}: IProps) => {
    if (!data || !data.posts) {
        return null;
    }
    
    return <div>
        {
            data.showName && <p className={clsx('mb-2')}><strong><em>{data.displayName}:</em></strong></p>
        }
        {
            (data.layout === 'Excerpt') && <BodyPostsListExcerptsComponent data={data}/>
        }
        {
            (data.layout === 'Heading Only') && <BodyPostsListHeadingsOnlyComponent data={data}/>
        }
    </div>
}

export {
    BodyPostsListComponent
}