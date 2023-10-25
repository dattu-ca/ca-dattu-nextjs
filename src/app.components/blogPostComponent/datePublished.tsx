import dayjs from "dayjs";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";


interface IProps {
    date: Date
}

const DatePublished = ({date}: IProps) => {
    return <MetaContainer>
        <div className={clsx(
            'mb-2'
        )}>
            <time dateTime={dayjs(date).format('YYYY-MM-DD')}
            className={clsx('flex items-center text-base text-zinc-400 dark:text-zinc-500')}>
                <span className={clsx('h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500')}></span>
                <span className={clsx('ml-3')}>{dayjs(date).format('MMM DD, YYYY')}</span>
            </time>
        </div>
    </MetaContainer>
}

export {
    DatePublished
}