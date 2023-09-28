import {BodyImage} from "~/models";
import {ImageComponent} from "./imageComponent";
import clsx from "clsx";

interface IProps {
    image: BodyImage
}

const ImageComponentWrapper = ({image}: IProps) => {

    return <div className={clsx()}>
        <div className={clsx()}
             style={{
                 width: image.maxWidth,
                 height: image.maxHeight,
             }}>
            <ImageComponent image={image}/>
        </div>
    </div>
}

export {
    ImageComponentWrapper
};