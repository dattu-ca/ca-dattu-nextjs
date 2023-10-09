import React, {ReactElement} from "react";

interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        slug: string;
    }
}


const Layout = ({children}: IProps) => children;

export default Layout;