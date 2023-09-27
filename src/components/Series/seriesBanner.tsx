import clsx from "clsx";
import Link from "next/link";
import {MetaSeries} from "~/models";
import {CgPathTrim} from "react-icons/cg";

interface IProps {
    series: MetaSeries
}

const SeriesBanner = ({series}: IProps) => {
    return <div className={clsx('mb-4 md:mb-8')}>
        <h5 className={clsx('mb-0')}>
            <Link href={`/series/${series.slug}`}
                  className={clsx(
                      'after:w-full after:bg-site-secondary',
                      'hover:after:bg-site-primary',
                      'flex flex-nowrap items-start justify-start gap-1'
                  )}>
                <CgPathTrim className={clsx('w-6 h-6')}/>
                <span>{series.name}</span>
            </Link>
        </h5>
    </div>
}

export {
    SeriesBanner
}