import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {IBlogPage} from "~/models";
import clsx from "clsx";

interface IProps {
    data: IBlogPage;
}

export const PageComponent = (props: IProps) => {
    const {data} = props;
    const {heading, body} = data;
    return <div className={clsx(
        'container mx-auto'
    )}>
        <h1>{heading}</h1>
        <CustomRichTexRenderer document={body}/>
    </div>;
}