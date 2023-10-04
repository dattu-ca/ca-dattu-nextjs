import {ReactElement} from "react";
import clsx from "clsx";
import {BlocksBodyContent_LayoutFormat} from "~/models";


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

    return <div className={clsx(
        'w-full h-full',
        {
            ['flex justify-center px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Xs),
            ['sm:flex sm:justify-center sm:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Sm),
            ['md:flex md:justify-center md:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Md),
            ['lg:flex lg:justify-center lg:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Lg),
            ['xl:flex xl:justify-center xl:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Xl),
        }
    )}>
        <div className={clsx(
            'h-full',
            {
                ['flex w-full max-w-7xl px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Xs),
                ['sm:flex sm:w-full sm:max-w-7xl']: ['Container Width', 'Default', 'Narrow'].includes(format.Md),
                ['md:flex md:w-full md:max-w-7xl']: ['Container Width', 'Default', 'Narrow'].includes(format.Md),
                ['lg:flex lg:w-full lg:max-w-7xl lg:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Lg),
                ['xl:flex xl:w-full xl:max-w-7xl xl:px-8']: ['Container Width', 'Default', 'Narrow'].includes(format.Xl),
            }
        )}>
            <div className={clsx(
                'mx-auto w-full h-full',
                {
                    ['relative px-4 lg:px-12']: ['Default', 'Narrow'].includes(format.Xs),
                    ['sm:relative sm:px-4 sm:px-8']: ['Default', 'Narrow'].includes(format.Sm),
                    ['md:relative md:px-4 md:px-8']: ['Default', 'Narrow'].includes(format.Md),
                    ['lg:relative lg:px-4 lg:px-8 lg:px-12']: ['Default', 'Narrow'].includes(format.Lg),
                    ['xl:relative xl:px-4 xl:px-8 xl:px-12']: ['Default', 'Narrow'].includes(format.Xl),
                }
            )}>
                <div className={clsx(
                    'h-full',
                    {
                        ['max-w-3xl']: ['Narrow'].includes(format.Xs),
                        ['sm:max-w-3xl']: ['Narrow'].includes(format.Sm),
                        ['md:max-w-3xl']: ['Narrow'].includes(format.Md),
                        ['lg:max-w-3xl']: ['Narrow'].includes(format.Lg),
                        ['xl:max-w-3xl']: ['Narrow'].includes(format.Xl),
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