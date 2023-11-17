import {fetchAuthProfileIdFromProviderData} from "~/services.db/auth";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import clsx from "clsx";

const Page = async () => {
    const authProfile = await fetchAuthProfileIdFromProviderData('google', '110936461031997432633')
    
    return <DefaultBlocksLayout allFormats='Default'>
        <div className={clsx('mt-8')}>
        <pre>{JSON.stringify(authProfile, null, 2)}</pre>
        </div>
    </DefaultBlocksLayout>
}

export default Page;
