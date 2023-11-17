import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";
import {BodyPostsList} from "~/models/bodyPostsList";

export interface MetaCategory extends BaseModel<'MetaCategory'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    displayName: string;
    contentBlocks?: BlocksBodyContent[] | undefined;

    parent?: MetaCategory | undefined;
    children?: MetaCategory[] | undefined;
    
    postsListData?: BodyPostsList | undefined;
    
    // For the `/categories` page.
    postsListIds?: string[] | undefined;
    totalPosts?: number | undefined;
}


export const createParentBreadCrumbs = (category: MetaCategory): MetaCategory [] => {
    
    if (category && category.parent) {
        return [category.parent, ...(createParentBreadCrumbs(category.parent))]
    }
    return [];
}