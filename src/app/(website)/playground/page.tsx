import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";


const Page = async () => {
    return <DefaultBlocksLayout allFormats='Default'>
        <div className={clsx('mt-8')}>
            <h1>Playground</h1>
        </div>
    </DefaultBlocksLayout>
}

export default Page;
