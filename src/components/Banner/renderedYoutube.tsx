import {IBodyYoutube} from "~/models";
import {YoutubeVideoComponent} from "../YoutubeVideoComponent";
import clsx from "clsx";

interface IProps {
    data: IBodyYoutube
}
const RenderedYoutube = ({data}: IProps) => {
    return <div className={clsx(
        'max-h-[250px]',
        'overflow-y-auto',
        'aspect-[8/2]',
        'flex items-center justify-center',
        'h-full',
    )}>
        <YoutubeVideoComponent data={data} />
    </div>
}

export  {
    RenderedYoutube
}