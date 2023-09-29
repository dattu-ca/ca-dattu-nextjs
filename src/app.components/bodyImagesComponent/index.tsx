import {BodyImage} from "~/models";
import {ImageComponent} from "~/app.ui.components/imageComponent";

interface IProps {
    data: BodyImage
}

const BodyImagesComponent = ({data}: IProps) => {
    return <div style={{
        maxWidth: '100vw'
    }}>
        <ImageComponent image={data}/>
    </div>;
}

export {
    BodyImagesComponent
}