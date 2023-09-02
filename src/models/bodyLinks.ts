export interface IBlogNavbarLink {
    id: string;
    icon?: string;
    label: string;
    url: string;
    links?: IBlogNavbarLink[];
}

export interface IBodyLinks {
    links: IBlogNavbarLink[]
}