import {ReactElement} from "react";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";
import {BlocksBodyContent_LayoutFormat} from "~/models";

interface IProps {
    children: ReactElement | ReactElement[];
    allFormats?:  BlocksBodyContent_LayoutFormat | undefined;
}

const MetaContainer = ({children, allFormats}: IProps) => {
    return <BlocksLayout format={{
        Xs: allFormats ?? 'Container Width',
        Sm: allFormats ?? 'Container Width',
        Md: allFormats ?? 'Default',
        Lg: allFormats ?? 'Narrow',
        Xl: allFormats ?? 'Narrow'
    }}>
        <div>{children}</div>
    </BlocksLayout>
}

export {
    MetaContainer
}