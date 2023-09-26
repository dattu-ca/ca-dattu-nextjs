import {IBodyYoutube} from "~/models";
import {YoutubeIframe} from "../YoutubeVideoComponent/iframeComponent";
import clsx from "clsx";

interface IProps {
    data: IBodyYoutube
}
const RenderedYoutube = ({data}: IProps) => {
    return <div className={clsx(
        'overflow-y-auto',
        'aspect-[8/2]',
        'flex items-center justify-center',
        'h-full',
    )}>
        <YoutubeIframe data={data} />
    </div>
}

export  {
    RenderedYoutube
}