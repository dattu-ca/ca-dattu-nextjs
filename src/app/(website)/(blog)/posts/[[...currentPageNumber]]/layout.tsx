import React, {ReactElement} from "react";
import {fetchPostsLists, getCurrentPageNumber} from "./utils";

interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        currentPageNumber: number;
    }
}

export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchPostsLists(currentPage, false);
    return {
        title: data?.blogPostsList?.heading || 'Articles'
    }

}


const Layout = ({children}: IProps) => children;

export default Layout;