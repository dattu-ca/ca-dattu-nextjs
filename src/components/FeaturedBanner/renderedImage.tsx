import {BodyImage} from "~/models";
import {ImageComponent} from "../ImageComponent/imageComponent";
import clsx from "clsx";

interface IProps {
    banner: BodyImage
}

const RenderedImage = ({banner}: IProps) => {

    return <div className={clsx()}>
        <ImageComponent image={banner} />
    </div>
}

export {
    RenderedImage
};