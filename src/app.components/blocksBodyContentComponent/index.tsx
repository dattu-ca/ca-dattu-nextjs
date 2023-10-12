import { BlocksBodyContent } from "~/models";
import { BlocksBodyContentLayoutComponent } from "./layout";
import clsx from "clsx";

interface IProps {
    blocks: BlocksBodyContent[] | undefined,
    isExcerpts: boolean;
}

const BlocksBodyContentComponent = ({ blocks, isExcerpts }: IProps) => {
    if (!blocks) {
        return <div className={clsx(
            {
                ['mb-4 sm:mb-6 md:mb-8 lg:mb-10']: !isExcerpts
            }
        )} />;
    }

    return <>
        <div>
            {
                blocks.map(block => {
                    return <div key={block.sysId}
                        className={clsx(
                            {
                                ['mb-4 sm:mb-6 md:mb-8 lg:mb-10']: !isExcerpts
                            }
                        )}>
                        <BlocksBodyContentLayoutComponent format={block.blockLayout.format}
                            gap={block.blockLayout.gap}
                            columns={block.columns}
                        />
                    </div>
                })
            }
        </div>
    </>

}

export {
    BlocksBodyContentComponent
}