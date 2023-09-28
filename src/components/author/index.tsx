import clsx from "clsx";
import {BlogAuthor} from "~/models";
import {CustomRichTexRenderer} from "../customRichTextRenderer";

interface IProps {
    author: BlogAuthor
}

const AuthorComponent = ({author}: IProps) => {
    const {bio} = author;
    return <div className={clsx()}>
        <CustomRichTexRenderer document={bio}/>
    </div>
}

export {
    AuthorComponent
}