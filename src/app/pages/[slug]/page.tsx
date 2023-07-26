import {PageComponent} from "~/components/Page";
import {IProps} from "./types";
import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() => import("~/components/Page/testComponent"), {
//     ssr: false,
// });

export default async function Page(props: IProps) {
    const {params} = props;
    const {slug} = params;
    return (
        <>
            <PageComponent slug={slug}/>
            {/*<DynamicComponent/>*/}
        </>
    )
   
}
export * from './metadata';