'use server';
import {metaCategoryServices} from "~/contentful/services";
import {MetaCategory} from "~/models";


const fetchChildren = async (parentId: string) => {
    let children: MetaCategory[] = []
    const fetchedByParentId = await metaCategoryServices.fetchByParentId(parentId);
    if (fetchedByParentId) {
        children = children.concat(fetchedByParentId);
        const ids = fetchedByParentId.map(item => item.sysId);
        for (const id of ids) {
            const result = await fetchChildren(id as string);
            if(result.length > 0){
                children = children.concat(result);
            }
        }
    }
    for(const child of children){
        delete child.parent;
    }
    return children;
}

export const fetchBySlug = async (slug: string) => {
    const result = await metaCategoryServices.fetchBySlug(slug) as MetaCategory;
    result.children = await fetchChildren(result.sysId as string);
    return result;
}