import clsx from "clsx";
import {BodyYouTube} from "~/models";

interface IProps {
    data: BodyYouTube;
}

const YoutubeIFrameComponent = ({data}: IProps) => {
    return <iframe src={`https://www.youtube.com/embed/${data.videoId}`}
                   title={data.name}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   width="560"
                   height="315"
                   className={clsx('max-w-full max-h-full')}>
    </iframe>
}

export {
    YoutubeIFrameComponent
}