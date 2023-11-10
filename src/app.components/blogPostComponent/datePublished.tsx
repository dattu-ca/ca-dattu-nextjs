import dayjs from "dayjs";
import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";


interface IProps {
    className?: string | undefined;
    date: Date;
}

const DatePublished = ({className, date}: IProps) => {
    return <div className={className}>
        <DefaultBlocksLayout>
            <div className={clsx()}>
                <time dateTime={dayjs(date).format('YYYY-MM-DD')}
                      className={clsx('flex items-center text-base text-zinc-400 dark:text-zinc-500')}>
                    <span className={clsx('h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500')}></span>
                    <span className={clsx('ml-3')}>{dayjs(date).format('MMM DD, YYYY')}</span>
                </time>
            </div>
        </DefaultBlocksLayout>
    </div>
}

export {
    DatePublished
}