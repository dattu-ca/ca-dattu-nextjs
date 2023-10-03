import {BlocksBodyContentGap, ColumnWidths, BlocksBodyContentFormat} from "~/models";
import {ReactElement} from "react";
import clsx from "clsx";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";


interface IProps {
    layoutWidth: BlocksBodyContentFormat;
    columnWidths: ColumnWidths;
    columnGaps: BlocksBodyContentGap;
    column1: ReactElement | ReactElement[];
    column2: ReactElement | ReactElement[];
    column3: ReactElement | ReactElement[];
}

const BlocksBodyContentLayout = ({
                                     layoutWidth,
                                     columnWidths,
                                     columnGaps,
                                     column1,
                                     column2,
                                     column3,
                                 }: IProps) => {

    const totalColumns = Number(columnWidths.slice(-1)) as number;
    const widths = columnWidths.split(',').map(w => w.trim());

    return <BlocksLayout layoutWidth={layoutWidth}>
        <div className={clsx(
            'grid',
            'grid-cols-1',
            {
                ['gap-0']: columnGaps === 'None',
                ['gap-2']: columnGaps === 'Xs',
                ['gap-4']: columnGaps === 'Sm',
                ['gap-6']: columnGaps === 'Md',
                ['gap-8']: columnGaps === 'Lg',
                ['gap-10']: columnGaps === 'Xl',
                ['grid-cols-1']: totalColumns === 1,
                ['md:grid-cols-2']: totalColumns === 2,
                ['md:grid-cols-3']: totalColumns === 3,
            }
        )}>
            <div className={clsx(
                'col-span-1',
                {
                    ['col-span-1']: Number(widths[0].slice(0, 1)) === 1,
                    ['md:col-span-2']: Number(widths[0].slice(0, 1)) === 2,
                }
            )}>
                {column1}
            </div>
            {
                widths.length >= 2 && (
                    <div className={clsx(
                        'col-span-1',
                        {
                            ['col-span-1']: Number(widths[1].slice(0, 1)) === 1,
                            ['md:col-span-2']: Number(widths[1].slice(0, 1)) === 2,
                        }
                    )}>
                        {column2}
                    </div>
                )
            }
            {
                widths.length === 3 && (
                    <div className={clsx(
                        'col-span-1',
                        {
                            ['col-span-1']: Number(widths[2].slice(0, 1)) === 1,
                        }
                    )}>
                        {column3}
                    </div>
                )
            }
        </div>
    </BlocksLayout>
}

export {
    BlocksBodyContentLayout
}