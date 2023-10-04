import React, {ReactElement} from "react";

interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        currentPageNumber: number;
    }
}
const Layout = ({children}: IProps) => children;

export default Layout;