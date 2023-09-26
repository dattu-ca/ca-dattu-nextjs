export interface ILink {
    contentType: 'Link';
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: ILink[];
}

export interface IBodyLinks {
    contentType: 'BodyLinks';
    links: ILink[]
}