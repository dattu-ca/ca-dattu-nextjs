import {Fragment} from "react";
import {BlocksBodyContent} from "~/models";
import {BlocksBodyContentLayout} from "./layout";
import {BlocksBodyContentColumn} from "./column";

interface IProps {
    blocks: BlocksBodyContent[] | undefined
}

const BlocksBodyContentComponent = ({blocks}: IProps) => {
    if (!blocks) {
        return null;
    }

    return <div>
        {
            blocks.map(block => {
                return <Fragment key={block.sysId}>
                    <BlocksBodyContentLayout layoutWidth={block.layoutWidth}
                                             columnWidths={block.columnWidths}
                                             columnGaps={block.columnGaps}
                                             column1={<BlocksBodyContentColumn blocks={block.column1Blocks}
                                                                               layout={block.column1Layout}
                                                                               gaps={block.column1Gaps}/>}
                                             column2={<BlocksBodyContentColumn blocks={block.column2Blocks}
                                                                               layout={block.column2Layout}
                                                                               gaps={block.column2Gaps}/>}
                                             column3={<BlocksBodyContentColumn blocks={block.column3Blocks}
                                                                               layout={block.column3Layout}
                                                                               gaps={block.column3Gaps}/>}
                    />
                </Fragment>
            })
        }
    </div>

}

export {
    BlocksBodyContentComponent
}