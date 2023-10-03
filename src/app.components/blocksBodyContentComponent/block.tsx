import {BlocksBodyContent_ContentType} from "~/models";
import {BodyImagesComponent} from "../bodyImagesComponent";
import {BodyContentComponent} from "../bodyContentComponent";
import {BodyYoutubeComponent} from "../bodyYoutubeComponent";
import {BodyFormComponent} from "../bodyFormComponent";


interface IProps {
    block: BlocksBodyContent_ContentType;
}

const BlocksBodyContentBlock = ({block}: IProps) => {
    switch (block.contentType) {
        case 'BodyImage': {
            return <BodyImagesComponent data={block}/>
        }
        case 'BodyContent': {
            return <BodyContentComponent data={block}/>
        }
        case 'BodyYoutube': {
            return <BodyYoutubeComponent data={block}/>
        }
        case 'BodyForm': {
            return <BodyFormComponent data={block}/>
        }
        default: {
            return <p>{`Did not implement ${block.contentType}`}</p>
        }
    }
}

export {
    BlocksBodyContentBlock
}