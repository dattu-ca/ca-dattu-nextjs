import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";

export interface MetaCategory extends BaseModel<'MetaCategory'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;

    parent?: MetaCategory | undefined;
    children?: MetaCategory[] | undefined;

    postsLists: BlogPost[];
}


export const createParentBreadCrumbs = (category: MetaCategory): MetaCategory [] => {
    
    if (category && category.parent) {
        return [category.parent, ...(createParentBreadCrumbs(category.parent))]
    }
    return [];
}