import {BodyPostsList} from "~/models";
import {BodyPostsListExcerptsComponent} from "./excerptsList";
import {BodyPostsListHeadingsOnlyComponent} from "./headingsOnly";


interface IProps {
    data: BodyPostsList
}

const BodyPostsListComponent = ({data}: IProps) => {
    if (!data || !data.posts) {
        return null;
    }
    if (data.layout === 'Excerpt') {
        return <BodyPostsListExcerptsComponent data={data}/>
    }
    if(data.layout === 'Heading Only'){
        return <BodyPostsListHeadingsOnlyComponent data={data} />
    }
    return null;


}

export {
    BodyPostsListComponent
}