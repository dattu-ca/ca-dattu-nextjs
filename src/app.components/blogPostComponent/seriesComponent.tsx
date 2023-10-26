import {MetaSeries} from "~/models";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    series?: MetaSeries | undefined;
}

const SeriesComponent = ({series}: IProps) => {
    return series && <MetaContainer>
        <div className={clsx(
            'flex items-center justify-start gap-1'
        )}>
            <strong><em>Series:</em></strong>
            <Link href={`/series/${series.slug}`}>{series.name}</Link>
        </div>
    </MetaContainer>

}

export {
    SeriesComponent
}