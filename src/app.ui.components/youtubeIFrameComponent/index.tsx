import clsx from "clsx";
import { YouTubeEmbed } from '@next/third-parties/google'
import {BodyYouTube} from "~/models";

interface IProps {
    data: BodyYouTube;
}

const YoutubeIFrameComponent = ({data}: IProps) => {
    return <div className={clsx(
        'mx-auto'
    )}>
        <YouTubeEmbed videoid={data.videoId} 
                      params="controls=1" 
                      playlabel='Play video' 
                      style={{'margin': '0 auto'}}
        />
    </div>
}

export {
    YoutubeIFrameComponent
}