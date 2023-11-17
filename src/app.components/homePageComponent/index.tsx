import {Fragment} from "react";
import clsx from "clsx";
import {HomePage} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    homePage?: HomePage | undefined;
}


const HomePageComponent = ({homePage}: IProps) => {
    if (!homePage) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={homePage.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading
            className={clsx(
                'mt-8'
            )}>
            <Fragment>
                {homePage.displayHeading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={homePage.contentBlocks} isExcerpts={false}/>
    </div>
}


export {
    HomePageComponent
}