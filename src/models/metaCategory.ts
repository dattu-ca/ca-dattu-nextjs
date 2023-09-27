export interface MetaCategory {
    sysId?: string | undefined;
    contentType: 'MetaCategory';
    slug: string;
    name: string;
    description?: object | undefined;
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