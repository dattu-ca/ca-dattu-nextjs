import {ReactElement} from "react";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";

interface IProps {
    children: ReactElement | ReactElement[];
}

const MetaContainer = ({children}: IProps) => {
    return <BlocksLayout format={{
        Xs: 'Container Width',
        Sm: 'Container Width',
        Md: 'Default',
        Lg: 'Narrow',
        Xl: 'Narrow'
    }}>
        <div>{children}</div>
    </BlocksLayout>
}

export {
    MetaContainer
}