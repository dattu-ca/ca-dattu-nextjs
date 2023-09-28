import {BodyYoutube} from "~/models";
import {YoutubeIframe} from "../youtubeVideoComponent/iframeComponent";
import clsx from "clsx";

interface IProps {
    data: BodyYoutube
}
const RenderedYoutube = ({data}: IProps) => {
    return <div className={clsx()}>
        <YoutubeIframe data={data} />
    </div>
}

export  {
    RenderedYoutube
}