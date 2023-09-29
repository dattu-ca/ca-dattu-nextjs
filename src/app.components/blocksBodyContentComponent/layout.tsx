import {ColumnGaps, ColumnWidths, LayoutWidth} from "~/models";
import {ReactElement} from "react";
import clsx from "clsx";


interface IProps {
    layoutWidth: LayoutWidth;
    columnWidths: ColumnWidths;
    columnGaps: ColumnGaps;
    column1: ReactElement;
    column2: ReactElement;
    column3: ReactElement;
}

const BlocksBodyContentLayout = ({
                                     layoutWidth,
                                     columnWidths,
                                     columnGaps,
                                     column1,
                                     column2,
                                     column3,
                                 }: IProps) => {

    return <div className={clsx(
        'grid',
        {
            ['w-full']: layoutWidth === 'Full Width',
            ['w-[75%]']: layoutWidth === 'Default',
            ['w-[50%]']: layoutWidth === 'Narrow'
        }
    )}>
        <div>
            {column1}
        </div>
        {
            columnWidths.split(',').length > 1 && (
                <div>
                    {column2}
                </div>
            )
        }
        {
            columnWidths.split(',').length > 2 && (
                <div>
                    {column3}
                </div>
            )
        }
    </div>
}

export {
    BlocksBodyContentLayout
}