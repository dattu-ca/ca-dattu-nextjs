import {PageComponent} from "~/components/Page";
import {IProps} from "./types";


export default async function Page(props: IProps) {
    const {params} = props;
    const {slug} = params;
    return <PageComponent slug={slug}/>
}
export * from './metadata';