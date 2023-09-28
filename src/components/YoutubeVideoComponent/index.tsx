import clsx from "clsx";
import {BodyYoutube} from "~/models";
import {YoutubeIframe} from "./iframeComponent";

interface IProps {
    data: BodyYoutube;
}

const YoutubeVideoComponent = ({data}: IProps) => {
    return <div className={clsx()}>
        <YoutubeIframe data={data}/>
    </div>
}

export {
    YoutubeVideoComponent
}