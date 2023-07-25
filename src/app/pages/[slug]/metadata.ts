import {getBlogPage} from "~/services/blogPage.services";
import {IProps} from "./types";

export async function generateMetadata(props: IProps) {
    const {params} = props;
    const {slug} = params;
    const data = await getBlogPage(slug);
    const {heading} = data;
    return {
        title: heading
    }
}
