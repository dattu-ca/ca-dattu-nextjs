import {
    BlocksBodyContent_GapBetweenColumns,
    BlocksBodyLayoutFormat,
    BlocksBodyContent_Column
} from "~/models";
import clsx from "clsx";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";
import {Fragment} from "react";
import {BlocksBodyContentColumnComponent} from "~/app.components/blocksBodyContentComponent/column";


interface IProps {
    format: BlocksBodyLayoutFormat;
    gap: BlocksBodyContent_GapBetweenColumns;
    columns: BlocksBodyContent_Column[];
}

const BlocksBodyContentLayoutComponent = ({
                                              format,
                                              gap,
                                              columns
                                          }: IProps) => {


    return <BlocksLayout format={format}>
        <div className={clsx(
            'grid grid-cols-12',
            {
                ['gap-0']: gap.Xs === 'None',
                ['gap-2']: gap.Xs === 'Xs',
                ['gap-4']: gap.Xs === 'Sm',
                ['gap-6']: gap.Xs === 'Md',
                ['gap-8']: gap.Xs === 'Lg',
                ['gap-10']: gap.Xs === 'Xl',
                ['sm:gap-0']: gap.Sm === 'None',
                ['sm:gap-2']: gap.Sm === 'Xs',
                ['sm:gap-4']: gap.Sm === 'Sm',
                ['sm:gap-6']: gap.Sm === 'Md',
                ['sm:gap-8']: gap.Sm === 'Lg',
                ['sm:gap-10']: gap.Sm === 'Xl',
                ['md:gap-0']: gap.Md === 'None',
                ['md:gap-2']: gap.Md === 'Xs',
                ['md:gap-4']: gap.Md === 'Sm',
                ['md:gap-6']: gap.Md === 'Md',
                ['md:gap-8']: gap.Md === 'Lg',
                ['md:gap-10']: gap.Md === 'Xl',
                ['lg:gap-0']: gap.Lg === 'None',
                ['lg:gap-2']: gap.Lg === 'Xs',
                ['lg:gap-4']: gap.Lg === 'Sm',
                ['lg:gap-6']: gap.Lg === 'Md',
                ['lg:gap-8']: gap.Lg === 'Lg',
                ['lg:gap-10']: gap.Lg === 'Xl',
                ['xl:gap-0']: gap.Xl === 'None',
                ['xl:gap-2']: gap.Xl === 'Xs',
                ['xl:gap-4']: gap.Xl === 'Sm',
                ['xl:gap-6']: gap.Xl === 'Md',
                ['xl:gap-8']: gap.Xl === 'Lg',
                ['xl:gap-10']: gap.Xl === 'Xl',
            }
        )}>
            {
                columns.map(column => {
                    return <Fragment key={column.index}>
                        <div className={clsx(
                            {
                                ['col-span-12']: column.gridColumnsSize.Xs === 12,
                                ['col-span-11']: column.gridColumnsSize.Xs === 11,
                                ['col-span-10']: column.gridColumnsSize.Xs === 10,
                                ['col-span-9']: column.gridColumnsSize.Xs === 9,
                                ['col-span-8']: column.gridColumnsSize.Xs === 8,
                                ['col-span-7']: column.gridColumnsSize.Xs === 7,
                                ['col-span-6']: column.gridColumnsSize.Xs === 6,
                                ['col-span-5']: column.gridColumnsSize.Xs === 5,
                                ['col-span-4']: column.gridColumnsSize.Xs === 4,
                                ['col-span-3']: column.gridColumnsSize.Xs === 3,
                                ['col-span-2']: column.gridColumnsSize.Xs === 2,
                                ['col-span-1']: column.gridColumnsSize.Xs === 1,
                                ['grid']: column.gridColumnsSize.Xs !== 0,
                                ['hidden']: column.gridColumnsSize.Xs === 0,
                                ['sm:col-span-12']: column.gridColumnsSize.Sm === 12,
                                ['sm:col-span-11']: column.gridColumnsSize.Sm === 11,
                                ['sm:col-span-10']: column.gridColumnsSize.Sm === 10,
                                ['sm:col-span-9']: column.gridColumnsSize.Sm === 9,
                                ['sm:col-span-8']: column.gridColumnsSize.Sm === 8,
                                ['sm:col-span-7']: column.gridColumnsSize.Sm === 7,
                                ['sm:col-span-6']: column.gridColumnsSize.Sm === 6,
                                ['sm:col-span-5']: column.gridColumnsSize.Sm === 5,
                                ['sm:col-span-4']: column.gridColumnsSize.Sm === 4,
                                ['sm:col-span-3']: column.gridColumnsSize.Sm === 3,
                                ['sm:col-span-2']: column.gridColumnsSize.Sm === 2,
                                ['sm:col-span-1']: column.gridColumnsSize.Sm === 1,
                                ['sm:grid']: column.gridColumnsSize.Sm !== 0,
                                ['sm:hidden']: column.gridColumnsSize.Sm === 0,
                                ['md:col-span-12']: column.gridColumnsSize.Md === 12,
                                ['md:col-span-11']: column.gridColumnsSize.Md === 11,
                                ['md:col-span-10']: column.gridColumnsSize.Md === 10,
                                ['md:col-span-9']: column.gridColumnsSize.Md === 9,
                                ['md:col-span-8']: column.gridColumnsSize.Md === 8,
                                ['md:col-span-7']: column.gridColumnsSize.Md === 7,
                                ['md:col-span-6']: column.gridColumnsSize.Md === 6,
                                ['md:col-span-5']: column.gridColumnsSize.Md === 5,
                                ['md:col-span-4']: column.gridColumnsSize.Md === 4,
                                ['md:col-span-3']: column.gridColumnsSize.Md === 3,
                                ['md:col-span-2']: column.gridColumnsSize.Md === 2,
                                ['md:col-span-1']: column.gridColumnsSize.Md === 1,
                                ['md:grid']: column.gridColumnsSize.Md !== 0,
                                ['md:hidden']: column.gridColumnsSize.Md === 0,
                                ['lg:col-span-12']: column.gridColumnsSize.Lg === 12,
                                ['lg:col-span-11']: column.gridColumnsSize.Lg === 11,
                                ['lg:col-span-10']: column.gridColumnsSize.Lg === 10,
                                ['lg:col-span-9']: column.gridColumnsSize.Lg === 9,
                                ['lg:col-span-8']: column.gridColumnsSize.Lg === 8,
                                ['lg:col-span-7']: column.gridColumnsSize.Lg === 7,
                                ['lg:col-span-6']: column.gridColumnsSize.Lg === 6,
                                ['lg:col-span-5']: column.gridColumnsSize.Lg === 5,
                                ['lg:col-span-4']: column.gridColumnsSize.Lg === 4,
                                ['lg:col-span-3']: column.gridColumnsSize.Lg === 3,
                                ['lg:col-span-2']: column.gridColumnsSize.Lg === 2,
                                ['lg:col-span-1']: column.gridColumnsSize.Lg === 1,
                                ['lg:grid']: column.gridColumnsSize.Lg !== 0,
                                ['lg:hidden']: column.gridColumnsSize.Lg === 0,
                                ['xl:col-span-12']: column.gridColumnsSize.Xl === 12,
                                ['xl:col-span-11']: column.gridColumnsSize.Xl === 11,
                                ['xl:col-span-10']: column.gridColumnsSize.Xl === 10,
                                ['xl:col-span-9']: column.gridColumnsSize.Xl === 9,
                                ['xl:col-span-8']: column.gridColumnsSize.Xl === 8,
                                ['xl:col-span-7']: column.gridColumnsSize.Xl === 7,
                                ['xl:col-span-6']: column.gridColumnsSize.Xl === 6,
                                ['xl:col-span-5']: column.gridColumnsSize.Xl === 5,
                                ['xl:col-span-4']: column.gridColumnsSize.Xl === 4,
                                ['xl:col-span-3']: column.gridColumnsSize.Xl === 3,
                                ['xl:col-span-2']: column.gridColumnsSize.Xl === 2,
                                ['xl:col-span-1']: column.gridColumnsSize.Xl === 1,
                                ['xl:grid']: column.gridColumnsSize.Xl !== 0,
                                ['xl:hidden']: column.gridColumnsSize.Xl === 0,
                            }
                        )}>
                            <BlocksBodyContentColumnComponent blocks={column.contentBlocks} gaps={column.gaps.Xs}
                                                              layout={column.layout}/>
                        </div>
                    </Fragment>
                })
            }
        </div>
    </BlocksLayout>
}

export {
    BlocksBodyContentLayoutComponent
}