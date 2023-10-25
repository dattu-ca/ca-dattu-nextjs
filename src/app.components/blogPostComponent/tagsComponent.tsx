import {MetaTag} from "~/models";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    tags?: MetaTag[] | undefined;
}

const TagsComponent = ({tags}: IProps) => {
    return tags && Array.isArray(tags) && tags.length > 0 && <MetaContainer>
        <ul className={clsx(
            'mb-2'
        )}>{

            tags.map(tag => (<li key={tag.slug}><Link href={`/tag/${tag.name}`}>{tag.name}</Link></li>))

        }</ul>
    </MetaContainer>

}

export {
    TagsComponent
}