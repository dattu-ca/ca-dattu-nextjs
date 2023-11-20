import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {BlocksBodyContent_LayoutFormat} from "~/models";
import {ReactElement} from "react";

interface IProps {
    className?: string | undefined;
    allFormats?: BlocksBodyContent_LayoutFormat | undefined;
    children?: ReactElement | ReactElement[];
}

const DividerComponent = ({className, allFormats, children}: IProps) => {
    return <div className={className}>
        <DefaultBlocksLayout allFormats={allFormats || 'Default'}>
            <div className="daisyui-divider" data-testid='daisyui-divider'></div>
        </DefaultBlocksLayout>
        {
            children && (
                <>
                    <DefaultBlocksLayout allFormats={allFormats || 'Default'}>
                        {children}
                    </DefaultBlocksLayout>
                    <DefaultBlocksLayout allFormats={allFormats || 'Default'}>
                        <div className="daisyui-divider" data-testid='daisyui-divider'></div>
                    </DefaultBlocksLayout>
                </>
            )
        }
    </div>
}

export {DividerComponent}