export interface ILink {
    contentType: 'Link';
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: ILink[];
}

export interface BodyLinks {
    sysId?: string | undefined;
    contentType: 'BodyLinks';
    links: ILink[]
}