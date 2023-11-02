import {MetaSeries} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    series?: MetaSeries | undefined;
}

const SeriesComponent = ({series}: IProps) => {
    return series && <DefaultBlocksLayout>
        <div className={clsx(
            'flex items-center justify-start gap-1'
        )}>
            <strong><em>Series:</em></strong>
            <Link href={`/series/${series.slug}`}>{series.name}</Link>
        </div>
    </DefaultBlocksLayout>

}

export {
    SeriesComponent
}