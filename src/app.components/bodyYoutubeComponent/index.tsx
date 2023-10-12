import clsx from "clsx";
import {BodyYouTube} from "~/models";
import {YoutubeIFrameComponent} from "~/app.ui.components/youtubeIFrameComponent";

interface IProps {
    data: BodyYouTube;
}

const BodyYoutubeComponent = ({data}: IProps) => {
    return <div className={clsx()}>
        <YoutubeIFrameComponent data={data}/>
    </div>
}

export {
    BodyYoutubeComponent
}