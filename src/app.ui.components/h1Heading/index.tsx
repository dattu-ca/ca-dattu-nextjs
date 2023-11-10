import {ReactElement} from "react";
import {BlocksLayout} from "../blocksLayout";


interface IProps {
    className?: string | undefined;
    children: ReactElement | ReactElement[];
}

const H1Heading = ({className, children}: IProps) => (
    <div className={className}>
        <BlocksLayout format={{
            Xs: 'Container Width',
            Sm: 'Container Width',
            Md: 'Default',
            Lg: 'Narrow',
            Xl: 'Narrow'
        }}>
            <h1>{children}</h1>
        </BlocksLayout>
    </div>
)

export {
    H1Heading
}