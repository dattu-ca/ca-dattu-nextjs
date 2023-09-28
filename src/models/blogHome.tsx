import {BlogPost} from "~/models";

export interface BlogHome {
    contentType: 'BlogHome';
    sysId?: string | undefined;
    slug?: string | undefined;
    body?: object | undefined;
    featuredPost?: BlogPost | undefined;
    spotlightPosts?: BlogPost[] | undefined;
}