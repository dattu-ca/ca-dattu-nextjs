import {Fragment} from "react";
import Link from "next/link";
import {MetaTag} from "~/models";


interface IProps {
    tags: MetaTag[];
}


const TagsNamesList = ({tags}: IProps) => {
    return tags &&
        tags.length > 0 &&
        tags.map((tag, index) => (
            <Fragment key={tag.slug}>
                <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
                {
                    (index < tags.length - 1) && <span>, </span>
                }
            </Fragment>
        ))

}

export {
    TagsNamesList
}