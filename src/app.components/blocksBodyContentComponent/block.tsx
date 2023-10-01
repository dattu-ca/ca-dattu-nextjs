import {ColumnBlock} from "~/models";
import {BodyImagesComponent} from "../bodyImagesComponent";
import {BodyContentComponent} from "../bodyContentComponent";
import {BodyYoutubeComponent} from "~/app.components/bodyYoutubeComponent";


interface IProps {
    block: ColumnBlock;
}

const BlocksBodyContentBlock = ({block}: IProps) => {
    switch (block.contentType) {
        case 'BodyImage': {
            return <BodyImagesComponent data={block}/>
        }
        case 'BodyContent': {
            return <BodyContentComponent data={block}/>
        }
        case 'BodyYoutube':{
            return <BodyYoutubeComponent data={block} />
        }
        default: {
            return <p>{`Did not implement ${block.contentType}`}</p>
        }
    }
}

export {
    BlocksBodyContentBlock
}