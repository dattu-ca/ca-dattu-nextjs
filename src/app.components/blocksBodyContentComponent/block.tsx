import {ColumnBlock} from "~/models";
import {BodyImagesComponent} from "../bodyImagesComponent";


interface IProps {
    block: ColumnBlock;
}

const BlocksBodyContentBlock = ({block}: IProps) => {
    switch (block.contentType) {
        case 'BodyImage': {
            return <BodyImagesComponent data={block} />
        }
        default: {
            return <p>{`Did not implement ${block.contentType}`}</p>
        }
    }
}

export {
    BlocksBodyContentBlock
}