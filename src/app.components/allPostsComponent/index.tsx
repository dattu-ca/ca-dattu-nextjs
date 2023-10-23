import { Fragment } from "react";
// import clsx from "clsx";
import { AllPosts } from "~/models";
import { H1Heading } from "~/app.ui.components/h1Heading";
import { BlocksBodyContentComponent } from "../blocksBodyContentComponent";
import clsx from "clsx";

interface IProps {
    allPosts?: AllPosts | undefined;
}


const AllPostsComponent = ({ allPosts }: IProps) => {
    if(!allPosts){
        return null;
    }
    
    return <div>
        <BlocksBodyContentComponent blocks={allPosts.preHeadingContentBlocks} isExcerpts={false} />
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <Fragment>
                    {allPosts.heading}
                </Fragment>
            </H1Heading>
        </div>
        <BlocksBodyContentComponent blocks={allPosts.contentBlocks} isExcerpts={false} />
    </div>
}


export {
    AllPostsComponent
}