import { BlocksBodyContent_ContentType } from "~/models";
import { BodyImagesComponent } from "../bodyImagesComponent";
import { BodyContentComponent } from "../bodyContentComponent";
import { BodyYoutubeComponent } from "../bodyYoutubeComponent";
import { BodyFormComponent } from "../bodyFormComponent";
import { BodyPostsListComponent } from "../bodyPostsListComponent";
import { BodyCodeComponent } from "../bodyCodeComponent";
import { BodyMarkdownComponent } from '../bodyMarkdownComponent';


interface IProps {
    block: BlocksBodyContent_ContentType;
}

const BlocksBodyContentBlock = ({ block }: IProps) => {
    switch (block.contentType) {
        case 'BodyImage': {
            return <BodyImagesComponent data={block} />
        }
        case 'BodyContent': {
            return <BodyContentComponent data={block} />
        }
        case 'BodyYouTube': {
            return <BodyYoutubeComponent data={block} />
        }
        case 'BodyForm': {
            return <BodyFormComponent data={block} />
        }
        case 'BodyCode': {
            return <BodyCodeComponent data={block} />
        }
        case 'BodyMarkdown': {
            return <BodyMarkdownComponent data={block} />
        }
        case 'BodyPostsList': {
            return <BodyPostsListComponent data={block} />
        }
        default: {
            return <>
                <p>{`Did not implement ${block.contentType}`}</p>
                <pre>{JSON.stringify(block, null, 2)}</pre>
            </>
        }
    }
}

export {
    BlocksBodyContentBlock
}