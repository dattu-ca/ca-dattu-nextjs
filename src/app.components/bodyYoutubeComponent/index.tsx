import clsx from "clsx";
import {BodyYoutube} from "~/models";
import {YoutubeIFrameComponent} from "~/app.ui.components/youtubeIFrameComponent";

interface IProps {
    data: BodyYoutube;
}

const BodyYoutubeComponent = ({data}: IProps) => {
    return <div className={clsx()}>
        <YoutubeIFrameComponent data={data}/>
    </div>
}

export {
    BodyYoutubeComponent
}