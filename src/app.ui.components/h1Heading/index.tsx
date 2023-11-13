import {ReactElement} from "react";
import {BlocksLayout} from "../blocksLayout";


interface IProps {
    className?: string | undefined;
    children: string | ReactElement | ReactElement[] | undefined;
}

const H1Heading = ({className, children}: IProps) => (
    <div className={className}>
        <BlocksLayout format={{
            Xs: 'Default',
            Sm: 'Default',
            Md: 'Default',
            Lg: 'Default',
            Xl: 'Default'
        }}>
            <h1>{children}</h1>
        </BlocksLayout>
    </div>
)

export {
    H1Heading
}