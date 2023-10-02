import React, {ReactElement} from "react";
import {blogPageServices} from "~/services";


interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        slug: string | string[];
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    return {
        title: 'POSTS ' + slug?.toString()
    }
}

const Layout = ({children}: IProps) => children;

export default Layout;