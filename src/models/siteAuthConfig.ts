import {BaseModel} from "./types";

export interface SiteAuthConfig extends BaseModel<'SiteAuthConfig'> {
    slug: string;
    loginTitle: string;
    loginButton: string;
    logoutTitle: string;
    logoutButton: string;
    errorTitle: string;
    errorButton: string;
}