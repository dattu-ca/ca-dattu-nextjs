import {BodyContent} from "~/models";
import {IBodyContentFields} from "./generated/index";
import {IBaseSkeleton} from "./types";

export type BodyContentSkeleton = IBaseSkeleton<'bodyYoutube', IBodyContentFields>;

export const mapContentful = (raw: any) => {
    if(!raw){
        return undefined;
    }
    const source = raw as BodyContentSkeleton;
    const fields = source.fields;
    if(!fields){
        return undefined;
    }
    const target: Partial<BodyContent> = {
        sysId: source.sys.id,
        contentType: 'BodyContent'
    };
    if (fields.name) {
        target.name = fields.name as string;
    }
    if (fields.body) {
        target.body = fields.body as object;
    }
    
    return target as BodyContent;
}