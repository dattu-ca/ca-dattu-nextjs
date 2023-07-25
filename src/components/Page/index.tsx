import {getBlogPage} from "~services/blogPage.services";
import {CustomRichTexRenderer} from '~components/CustomRichTextRenderer';
import {IProps} from "./types";


export const PageComponent = async (props: IProps) => {
    const data = await getBlogPage(props.slug);
    const {heading, body} = data;
    return <div>
        <h1>{heading}</h1>
        <CustomRichTexRenderer document={body}/>
    </div>;
}