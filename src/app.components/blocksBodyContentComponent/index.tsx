import {Fragment} from "react";
import {BlocksBodyContent} from "~/models";
import {BlocksBodyContentLayout} from "./layout";
import {BlocksBodyContentColumn} from "./column";
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
                    <pre>{JSON.stringify(block, null, 2)}</pre>
                    {/*<BlocksBodyContentLayout layoutWidth={block.layoutWidth}*/}
                    {/*                         columnWidths={block.columnWidths}*/}
                    {/*                         columnGaps={block.columnGaps}*/}
                    {/*                         column1={<BlocksBodyContentColumn blocks={block.column1Blocks}*/}
                    {/*                                                           layout={block.column1Layout}*/}
                    {/*                                                           gaps={block.column1Gaps}/>}*/}
                    {/*                         column2={<BlocksBodyContentColumn blocks={block.column2Blocks}*/}
                    {/*                                                           layout={block.column2Layout}*/}
                    {/*                                                           gaps={block.column2Gaps}/>}*/}
                    {/*                         column3={<BlocksBodyContentColumn blocks={block.column3Blocks}*/}
                    {/*                                                           layout={block.column3Layout}*/}
                    {/*                                                           gaps={block.column3Gaps}/>}*/}
                    {/*/>*/}
                </div>
            })
        }
    </div>

}

export {
    BlocksBodyContentComponent
}