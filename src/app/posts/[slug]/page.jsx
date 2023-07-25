import {getSingleBlogPage} from '~services/blogPage.services';
import {CustomRichTexRenderer} from '~components/CustomRichTextRenderer';


export async function generateMetadata({ params }){
    const { slug } = params;
    const data = await getSingleBlogPage(slug);
    const {heading} = data;
    return {
        title: heading
    }
}

export default async function Page({params}) {
    const { slug } = params;
    const data = await getSingleBlogPage(slug);
    const {heading, body} = data;
    return <div>
        <h1>{heading}</h1>
        <CustomRichTexRenderer document={body} />
        
    </div>;
}