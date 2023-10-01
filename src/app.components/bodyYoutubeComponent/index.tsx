import clsx from "clsx";
import {BodyYoutube} from "~/models";
import {YoutubeIframe} from "./iframeComponent";

interface IProps {
    data: BodyYoutube;
}

const BodyYoutubeComponent = ({data}: IProps) => {
    return <div className={clsx()}>
        <YoutubeIframe data={data}/>
    </div>
}

export {
    BodyYoutubeComponent
}