import {MetaSeries} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    className?: string | undefined;
    series?: MetaSeries | undefined;
}

const SeriesComponent = ({className, series}: IProps) => {
    return <div className={className}>
        {
            series?.slug && <DefaultBlocksLayout>
                <div className={clsx(
                    'flex items-center justify-start gap-1'
                )}>
                    <strong><em>Series:</em></strong>
                    <Link href={`/series/${series.slug}`}>{series.name}</Link>
                </div>
            </DefaultBlocksLayout>
        }
    </div>

}

export {
    SeriesComponent
}