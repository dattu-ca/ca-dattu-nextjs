import clsx from "clsx";
import Link from "next/link";
import {MetaSeries} from "~/models";
import {IoIosAlbums} from "react-icons/io";

interface IProps {
    series: MetaSeries
}

const SeriesBanner = ({series}: IProps) => {
    return <div>
        <h5 className={clsx()}>
            <Link href={`/series/${series.slug}`}
                  className={clsx()}>
                <IoIosAlbums className={clsx()}/>
                <span>{series.name}</span>
            </Link>
        </h5>
    </div>
}

export {
    SeriesBanner
}