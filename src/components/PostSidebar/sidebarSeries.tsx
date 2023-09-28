import {BlogPost} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {SeriesBanner} from "~/components/Series/seriesBanner";
import {SpotlightPosts} from "~/components/PostsList/SpotlightPosts";

interface IProps {
    posts: BlogPost[];
}

const SidebarSeries = ({posts}: IProps) => {
    return <div className={clsx()}>
        <div className={clsx()}>
            <h4>Other posts in the Series</h4>
            <div className={clsx()}>
                <SeriesBanner series={posts[0].series}/>
            </div>
        </div>
        <div>
            <SpotlightPosts posts={posts}/>
        </div>
    </div>
}

export {
    SidebarSeries
}