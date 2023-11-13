import {BlocksLayout} from "~/app.ui.components/blocksLayout";
import clsx from "clsx";

const Page = () => {
    const Viewport = () => <div className={clsx('bg-blue-300 mb-8 text-center text-white')}>
        <p className={clsx('sm:hidden')}>XS</p>
        <p className={clsx('hidden sm:block md:hidden')}>SM</p>
        <p className={clsx('hidden md:block lg:hidden')}>MD</p>
        <p className={clsx('hidden lg:block xl:hidden')}>LG</p>
        <p className={clsx('hidden xl:block')}>XL</p>
    </div>
    
    return <div className={clsx('opacity-50')}>
        <BlocksLayout format={{
            Xs: 'Full Width',
            Sm: 'Full Width',
            Md: 'Full Width',
            Lg: 'Full Width',
            Xl: 'Full Width',
        }}>
            <div className={clsx('bg-red-300 h-[100px] mb-8 text-center')}>
                <h1>Full Width</h1>
                <Viewport/>
            </div>
        </BlocksLayout>
        <BlocksLayout format={{
            Xs: 'Container Width',
            Sm: 'Container Width',
            Md: 'Container Width',
            Lg: 'Container Width',
            Xl: 'Container Width',
        }}>
            <div className={clsx('bg-teal-500 h-[100px] mb-8 text-center')}>
                <h1>Container Width</h1>
                <Viewport/>
            </div>
        </BlocksLayout>
        <BlocksLayout format={{
            Xs: 'Default',
            Sm: 'Default',
            Md: 'Default',
            Lg: 'Default',
            Xl: 'Default',
        }}>
            <div className={clsx('bg-red-500 h-[100px] mb-8 text-center')}>
                <h1>Default</h1>
                <Viewport/>
            </div>
        </BlocksLayout>
        <BlocksLayout format={{
            Xs: 'Narrow',
            Sm: 'Narrow',
            Md: 'Narrow',
            Lg: 'Narrow',
            Xl: 'Narrow',
        }}>
            <div className={clsx('bg-teal-300 h-[100px] mb-8 text-center')}>
                <h1>Narrow</h1>
                <Viewport/>
            </div>
        </BlocksLayout>

    </div>
}

export default Page;