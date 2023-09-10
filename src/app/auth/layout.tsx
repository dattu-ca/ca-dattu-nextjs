import {ReactElement} from "react";

interface IProps {
    children: ReactElement;
}

const RootLayout = async ({children}: IProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default RootLayout;