import React, {ReactElement} from "react";
import clsx from "clsx";
import {metaSeriesServices} from "~/services";
import {MetaSeries} from "~/models";
import {SeriesDescription} from "~/components/Series/SeriesDescription";


interface IProps {
    children: ReactElement;
    params: {
        slug: string;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const category = await metaSeriesServices.fetchBySlug(slug as string) as MetaSeries;
    const {name} = category;
    return {
        title: name
    }
}

const Layout = async ({children, params: {slug}}: IProps) => {
    const series = await metaSeriesServices.fetchBySlug(slug as string) as MetaSeries;
    return <div>

        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-full-width',
        )}>
            <div>
                <h1>{series.name}</h1>
            </div>
        </div>
        <div className={clsx(
            'pb-4 md:pb-8',
            'wrapper-with-sidebar',
        )}>
            <section className={clsx(
                'container',
            )}>
                {children}
            </section>
            <div className={clsx(
                'sidebar'
            )}>
                <SeriesDescription series={series} />
            </div>
        </div>
    </div>
}
export default Layout;