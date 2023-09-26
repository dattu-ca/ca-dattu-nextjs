import clsx from "clsx";
import {IBodyYoutube} from "~/models";
import {YoutubeIframe} from "./iframeComponent";

interface IProps {
    data: IBodyYoutube;
}

const YoutubeVideoComponent = ({data}: IProps) => {
    return <div className={clsx(
        'w-[100%] max-w-full',
        'h-[100%] max-h-full',
        'aspect-[1/1]',
        'mx-auto',
    )}>
        <YoutubeIframe data={data}/>
    </div>
}

export {
    YoutubeVideoComponent
}