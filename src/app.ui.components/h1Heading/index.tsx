import {ReactElement} from "react";
import {BlocksLayout} from "../blocksLayout";


interface IProps {
    children: ReactElement | ReactElement[];
}

const H1Heading = ({children}: IProps) => (
    <BlocksLayout format={{
        Xs: 'Container Width',
        Sm: 'Container Width',
        Md: 'Default',
        Lg: 'Narrow',
        Xl: 'Narrow'
    }}>
        <h1>{children}</h1>
    </BlocksLayout>
)

export {
    H1Heading
}