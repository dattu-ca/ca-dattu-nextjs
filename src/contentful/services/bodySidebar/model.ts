import {IBodySidebar} from "~/models";
import {IBodySidebarFields} from "~/contentful/schema/generated";
import {mapContentful as mapContentful_bodyLinks} from "~/contentful/services/bodyLinks";

export type BodySidebarSkeleton = {
    fields: IBodySidebarFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodySidebarSkeleton).fields;
    const target: Partial<IBodySidebar> = {};
    target.heading = source.heading;
    target.description = source.description;
    target.navigation = mapContentful_bodyLinks(source.navigation);
    
    return target as IBodySidebar;

}

export const mapContentfulList = (raw: any) => {
    if (!raw || !Array.isArray(raw)) {
        return [] as IBodySidebar[]
    }
    const source = raw as any[];
    return source.map(item => mapContentful(item)).filter(item => item) as IBodySidebar[];
}