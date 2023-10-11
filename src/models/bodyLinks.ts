import {BaseModel} from "./types";

export interface ILink extends BaseModel<'Link'> {
    id: string;
    target?: '_self' | '_blank' | undefined;
    label: string;
    url: string;
    links?: ILink[];
}

export interface BodyLinks extends BaseModel<'BodyLinks'> {
    name?: string | undefined;
    links: ILink[]
}