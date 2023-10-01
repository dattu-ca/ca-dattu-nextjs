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
                   width="560"
                   height="315"
                   className={clsx('max-w-full max-h-full')}>
    </iframe>
}

export {
    YoutubeIframe
}


/**
 <iframe width="560" height="315" src="https://www.youtube.com/embed/MVYrJJNdrEg?si=rPuK9COo1Gm5ewe9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 */