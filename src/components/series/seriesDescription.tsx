import clsx from "clsx";
import {MetaSeries} from "~/models";
import {CustomRichTexRenderer} from "../customRichTextRenderer";


interface IProps {
    series: MetaSeries,
}

const SeriesDescription = ({series}: IProps) => {
    const {name, description} = series;
    return <div className={clsx()}>
        <h4 className={clsx()}>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </div>
}

export {
    SeriesDescription
}