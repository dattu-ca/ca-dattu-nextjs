import {ReactElement} from "react";
import {BlocksLayout} from "../blocksLayout";


interface IProps {
    children: ReactElement
}

const H1Heading = ({children}: IProps) => (
    <BlocksLayout layoutWidth='Narrow'>
        <h1>{children}</h1>
    </BlocksLayout>
)

export {
    H1Heading
}