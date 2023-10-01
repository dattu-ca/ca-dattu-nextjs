import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";

export interface MetaCategory extends BaseModel<'MetaCategory'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
    parent?: MetaCategory | undefined;
    children?: MetaCategory[] | undefined;
}


const getParent = (category: MetaCategory) => {
    let ret: MetaCategory[] = [category];
    if (category.parent) {
        ret = ret.concat(getParent(category.parent));
    }
    return ret;
}

export const CreateCategoryBreadCrumbs = (category: MetaCategory) => {
    const arr = getParent(category);
    arr.forEach(item => {
        delete item.parent;
    });
    return arr.reverse();
}