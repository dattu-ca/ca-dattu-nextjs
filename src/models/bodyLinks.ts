export interface ILink {
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: ILink[];
}

export interface IBodyLinks {
    links: ILink[]
}