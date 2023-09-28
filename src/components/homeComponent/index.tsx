import clsx from "clsx";
import {BlogHome} from "~/models";
import {CustomRichTexRenderer} from "../customRichTextRenderer";

interface IProps {
    data: BlogHome
}

const HomeComponent = ({data}: IProps) => {
    const {body} = data;

    return <div className={clsx()}>
        <CustomRichTexRenderer document={body}/>
    </div>
}

export {
    HomeComponent
}