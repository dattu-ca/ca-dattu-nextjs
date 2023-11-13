import Link from 'next/link';
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {H1Heading} from "~/app.ui.components/h1Heading";

const NotFoundPageComponent = () => {


    return (
        <div>
            <H1Heading>
                <span>Page Not Found</span>
            </H1Heading>
            <DefaultBlocksLayout>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </DefaultBlocksLayout>
        </div>
    )
}

export {
    NotFoundPageComponent
}