import clsx from "clsx";
import {BodyYoutube} from "~/models";
import {YoutubeIframe} from "../youtubeVideoComponent/iframeComponent";

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