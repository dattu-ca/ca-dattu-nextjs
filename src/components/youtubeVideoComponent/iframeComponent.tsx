import clsx from "clsx";
import {BodyYoutube} from "~/models";

interface IProps {
    data: BodyYoutube;
}

const YoutubeIframe = ({data}: IProps) => {
    return <iframe src={`https://www.youtube.com/embed/${data.videoId}`}
                   title={data.name}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   className={clsx()}>
    </iframe>
}

export {
    YoutubeIframe
}