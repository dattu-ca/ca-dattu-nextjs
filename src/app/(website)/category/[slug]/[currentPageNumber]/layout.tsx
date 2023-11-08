import React, {ReactElement} from "react";
import {fetchBySlug, getCurrentPageNumber} from "./utils";

interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        slug: string;
        currentPageNumber: string;
    }
}


export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage)

    if (!data || !data?.category) {
        return {}
    }
    return {
        title: data.category.name
    }

}

const Layout = ({children}: IProps) => {
    return <div>
        {children}
    </div>
};

export default Layout;