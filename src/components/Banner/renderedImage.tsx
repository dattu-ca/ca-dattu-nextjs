import {BodyImage} from "~/models";
import {ImageComponent} from "../ImageComponent/imageComponent";

interface IProps {
    banner: BodyImage
}

const RenderedImage = ({banner}: IProps) => {

    return <div className={'aspect-[8/2]'}>
        <ImageComponent image={banner} />
    </div>
}

export {
    RenderedImage
};