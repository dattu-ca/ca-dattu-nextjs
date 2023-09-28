import clsx from "clsx";
import {BlogHome} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";

interface IProps {
    data: BlogHome
}

const HomeComponent = ({data}: IProps) => {
    const {body} = data;

    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <CustomRichTexRenderer document={body}/>
    </div>
}

export {
    HomeComponent
}