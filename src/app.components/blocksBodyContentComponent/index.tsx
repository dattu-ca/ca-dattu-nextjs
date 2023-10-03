import {BlocksBodyContent} from "~/models";
import {BlocksBodyContentLayoutComponent} from "./layout";
import clsx from "clsx";

interface IProps {
    blocks: BlocksBodyContent[] | undefined
}

const BlocksBodyContentComponent = ({blocks}: IProps) => {
    if (!blocks) {
        return <div className={clsx('mb-4 sm:mb-6 md:mb-8 lg:mb-10')} />;
    }

    return <div >
        {
            blocks.map(block => {
                return <div key={block.sysId}
                className={clsx(
                    'mb-4 sm:mb-6 md:mb-8 lg:mb-10'
                )}>
                    <BlocksBodyContentLayoutComponent format={block.blockLayout.format}
                                                      gap={block.blockLayout.gap}
                                                      columns={block.columns}
                    />
                </div>
            })
        }
    </div>

}

export {
    BlocksBodyContentComponent
}