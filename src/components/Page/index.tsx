'use client';
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {IBlogPage} from "~/models";
import clsx from "clsx";
import {HeadingComponent} from "~/components/Page/heading";
import {PageContextProvider} from "~/components/Page/context";
import {SidebarComponent} from "~/components/Sidebar";

interface IProps {
    data: IBlogPage;
}

export const PageComponent = (props: IProps) => {
    const {data} = props;
    const {body, sidebars} = data;
    return <PageContextProvider data={data}>
        <div className={clsx(
            'pb-4'
        )}>
            <HeadingComponent/>
            <div className={clsx(
                'mt-4',
                'overflow-y-auto',
                'content-container',
            )}>
                <div className={clsx(
                    'flex flex-col md:flex-row gap-6'
                )}>
                    <div className={clsx(
                        'w-full md:w-2/3'
                    )}>
                        <CustomRichTexRenderer document={body}/>
                    </div>
                    <div className={clsx(
                        'w-full md:w-1/3'
                    )}>
                        {
                            sidebars && sidebars.map(sidebar => <SidebarComponent key={sidebar.slug}
                                                                                  sidebar={sidebar}/>)
                        }
                    </div>
                </div>
            </div>

        </div>
    </PageContextProvider>;
}