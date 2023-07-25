import {PageComponent} from "~/components/Page";
import {iProps} from "./interfaces";


export default async function Page(props: iProps) {
    const {params} = props;
    const {slug} = params;
    return <PageComponent slug={slug}/>
}
export * from './metadata';