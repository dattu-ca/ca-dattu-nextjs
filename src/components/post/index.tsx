import clsx from "clsx";
import dayjs from "dayjs";
import {BlogPost} from "~/models";
import {SeriesBanner} from "../series/seriesBanner";
import {CustomRichTexRenderer} from "../customRichTextRenderer";
import {PostContextProvider} from "./context";

interface IProps {
    data: BlogPost;
}

export const PostComponent = (props: IProps) => {
    const {data} = props;
    const {body, heading} = data;

    return <PostContextProvider data={data}>
        <div className={clsx()}>
            <div className={clsx()}>
                <span aria-label='Published on'>{dayjs(data.publishedDate).format('MMM DD, YYYY')}</span>
            </div>
            {
                data.series && (<div className={clsx()}><SeriesBanner series={data.series}/></div>)
            }
            <h1>{heading}</h1>
            <CustomRichTexRenderer document={body}/>
        </div>
    </PostContextProvider>;
}