import {BaseModel} from "./types";

export interface AuthConfig extends BaseModel<'AuthConfig'> {
    slug: string;
    loginTitle?: string | undefined;
    loginButton?: string | undefined;
    logoutTitle?: string | undefined;
    logoutButton?: string | undefined;
    errorTitle?: string | undefined;
    errorButton?: string | undefined;
}