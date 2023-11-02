import React, {ReactElement} from "react";
import {fetchAllPosts, getCurrentPageNumber} from "./utils";

interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        currentPageNumber: number;
    }
}

export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const {allPosts, paginationConfig} = await fetchAllPosts(currentPage);
    return {
        title: `${allPosts?.heading || 'Articles'} - Page ${paginationConfig.current}/${paginationConfig.totalPages}`
    }

}


const Layout = ({children}: IProps) => children;

export default Layout;