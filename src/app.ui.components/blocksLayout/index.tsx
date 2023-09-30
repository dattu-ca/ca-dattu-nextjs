import {ReactElement} from "react";
import clsx from "clsx";
import {LayoutWidth} from "~/models";


interface IProps {
    layoutWidth: LayoutWidth;
    children: ReactElement | ReactElement[];
}

const BlocksLayout = ({
                          layoutWidth,
                          children
                      }: IProps) => {

    return <div className={clsx(
        'w-full',
        {
            ['flex justify-center sm:px-8']: ['Container Width', 'Default', 'Narrow'].includes(layoutWidth),
        }
    )}>
        <div className={clsx(
            {
                ['flex w-full max-w-7xl lg:px-8']: ['Container Width', 'Default', 'Narrow'].includes(layoutWidth),
            }
        )}>
            <div className={clsx(
                'mx-auto w-full',
                {
                    ['relative px-4 sm:px-8 lg:px-12']: ['Default', 'Narrow'].includes(layoutWidth),
                }
            )}>
                <div className={clsx(
                    {
                        ['max-w-3xl']: ['Narrow'].includes(layoutWidth),
                    }
                )}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}

export {
    BlocksLayout
}