import clsx from "clsx";
import {BodyYouTube} from "~/models";

interface IProps {
    data: BodyYouTube;
}

const YoutubeIFrameComponent = ({data}: IProps) => {
    return <iframe src={`https://www.youtube.com/embed/${data.videoId}`}
                   title={data.displayName}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   className={clsx('w-full h-full min-h-[400px] max-w-full max-h-full')}>
    </iframe>
}

export {
    YoutubeIFrameComponent
}