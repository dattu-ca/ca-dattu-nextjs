'use client';
import Slider from "react-slick";
import {BlocksBodyContentBlock} from "./block";
import {ColumnBlock, ColumnGaps} from "~/models";



interface IProps {
    blocks: ColumnBlock[];
    gaps: ColumnGaps;
}

const ColumnSlider = ({ blocks}: IProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div>
        <Slider {...settings}>
            {
                blocks.map(block => (
                    <div key={block.sysId}>
                        <BlocksBodyContentBlock block={block}/>
                    </div>
                ))
            }
        </Slider>
    </div>
}

export {
    ColumnSlider
}