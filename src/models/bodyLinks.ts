import {BaseModel} from "./types";

export interface ILink extends BaseModel<'Link'> {
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: ILink[];
}

export interface BodyLinks extends BaseModel<'BodyLinks'> {
    name?: string | undefined;
    links: ILink[]
}