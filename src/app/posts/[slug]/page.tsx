import {getSingleBlogPage} from '~services/blogPage.services';
import {CustomRichTexRenderer} from '~components/CustomRichTextRenderer';

export default async function Page({params}) {
    const { slug } = params;
    const data = await getSingleBlogPage(slug);
    
    const {heading, body} = data.fields;
    return <div>
        <h1>{heading}</h1>
        <CustomRichTexRenderer document={body} />
        
    </div>;
}