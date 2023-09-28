import {MetaCategory, MetaTag} from "~/models";
import clsx from "clsx";
import {TagsNamesList} from "~/components/Tag/TagsNameList";

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