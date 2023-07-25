import {getBlogPage} from "~services/blogPage.services";
import {CustomRichTexRenderer} from '~components/CustomRichTextRenderer';


interface iParams {
    slug: string;
}

export const PageComponent = async (props: iParams) => {
    const data = await getBlogPage(props.slug);
    const {heading, body} = data;
    return <div>
        <h1>{heading}</h1>
        <CustomRichTexRenderer document={body}/>
    </div>;
}