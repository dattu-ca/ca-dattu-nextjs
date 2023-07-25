import {getBlogPage} from "~/services/blogPage.services";
import {iProps} from "./interfaces";

export async function generateMetadata(props: iProps) {
    const {params} = props;
    const {slug} = params;
    const data = await getBlogPage(slug);
    const {heading} = data;
    return {
        title: heading
    }
}
