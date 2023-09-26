import {IBodyYoutube} from "~/models";
import clsx from "clsx";

interface IProps {
    data: IBodyYoutube;
    maxHeight?: number;
    maxWidth?: number;
}

const YoutubeVideoComponent = ({data, maxWidth, maxHeight}: IProps) => {
    return <div className={clsx(
        'flex items-center justify-center',
        'bg-gray-900',
        'h-full',
    )}>
        <iframe src={`https://www.youtube.com/embed/${data.videoId}`}
                title={data.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={clsx(
                    'h-full',
                )}
        >
        </iframe>
    </div>
}

export {
    YoutubeVideoComponent
}