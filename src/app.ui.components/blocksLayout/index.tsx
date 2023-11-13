import { ReactElement } from "react";
import clsx from "clsx";
import { BlocksBodyContent_LayoutFormat } from "~/models";


interface IProps {
    format: {
        Xs: BlocksBodyContent_LayoutFormat;
        Sm: BlocksBodyContent_LayoutFormat;
        Md: BlocksBodyContent_LayoutFormat;
        Lg: BlocksBodyContent_LayoutFormat;
        Xl: BlocksBodyContent_LayoutFormat;
    }
    children: ReactElement | ReactElement[];
}

const BlocksLayout = ({
    format,
    children
}: IProps) => {

    return <>
        <div className={clsx(
            'w-full h-full mx-auto',
            {
                ['inset-0 flex justify-center max-w-7xl px-4']: ['Container Width', 'Default', 'Narrow'].includes(format.Xs),
                ['sm:inset-0 sm:flex sm:justify-center max-w-7xl sm:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Sm),
                ['md:inset-0 md:flex md:justify-center max-w-7xl md:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Md),
                ['lg:inset-0 lg:flex lg:justify-center max-w-7xl lg:px-16']: ['Container Width', 'Default', 'Narrow'].includes(format.Lg),
                ['xl:inset-0 xl:flex xl:justify-center max-w-7xl xl:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Xl),
            }
        )}>
            <div className={clsx(
                'h-full w-full mx-auto',
                {
                    ['px-6']: ['Default', 'Narrow'].includes(format.Xs),
                    ['sm:px-8']: ['Default', 'Narrow'].includes(format.Md),
                    ['md:px-10']: ['Default', 'Narrow'].includes(format.Md),
                    ['lg:px-12']: ['Default', 'Narrow'].includes(format.Lg),
                    ['xl:px-16']: ['Default', 'Narrow'].includes(format.Xl),
                }
            )}>
                <div className={clsx(
                    'w-full h-full',
                    {
                        ['pr-[80px]']: ['Narrow'].includes(format.Xs),
                        ['sm:pr-[140px]']: ['Narrow'].includes(format.Sm),
                        ['md:pr-[200px]']: ['Narrow'].includes(format.Md),
                        ['lg:pr-[240px]']: ['Narrow'].includes(format.Lg),
                        ['xl:pr-[320px]']: ['Narrow'].includes(format.Xl),
                    }
                )}>
                    {children}
                </div>
            </div>
        </div>
    </>
}

export {
    BlocksLayout
}