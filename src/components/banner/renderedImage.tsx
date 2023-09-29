import clsx from "clsx";
import {BodyImage} from "~/models";
import {ImageComponent} from "../imageComponent/imageComponent";

interface IProps {
    banner: BodyImage
}

const RenderedImage = ({banner}: IProps) => {

    return <div className={clsx(
        
    )}>
        <ImageComponent image={banner} />
    </div>
}

export {
    RenderedImage
};