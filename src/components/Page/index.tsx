'use client';
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {IBlogPage} from "~/models";
import clsx from "clsx";
import {HeadingComponent} from "~/components/Page/heading";
import {PageContextProvider} from "~/components/Page/context";

interface IProps {
    data: IBlogPage;
}

export const PageComponent = (props: IProps) => {
    const {data} = props;
    const {body} = data;
    return <PageContextProvider data={data}>
        <div className={clsx()}>
            <HeadingComponent/>
            <div className={clsx(
                'mt-4',
                'content-container',
            )}>
                <CustomRichTexRenderer document={body}/>
            </div>
        </div>
    </PageContextProvider>;
}