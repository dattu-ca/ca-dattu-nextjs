import clsx from "clsx";
import {MetaTag} from "~/models";
import {TagsNamesList} from "../tag/tagsNameList";

interface IProps {
    tags: MetaTag[];
}

const SidebarTags = ({tags}: IProps) => {
    return <div className={clsx()}>
        <h4>Tags</h4>
        <TagsNamesList tags={tags}/>
    </div>
}

export {
    SidebarTags
}