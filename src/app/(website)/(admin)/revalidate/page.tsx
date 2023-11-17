import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {revalidatePath, revalidateTag} from "next/cache";

let count = 0;

const Page = () => {
    async function onRevalidate() {
        "use server";
        count++;
        revalidateTag('layout');
        revalidateTag('page');
        revalidatePath('/', 'layout');
    }
    
    return <DefaultBlocksLayout allFormats='Default'>
        <div className={clsx('mt-8')}>
            <h1>Revalidate</h1>
            <form action={onRevalidate}>
                <button type="submit" className={clsx('daisyui-btn')}>Revalidated times = [{count}]</button>
            </form>
        </div>
    </DefaultBlocksLayout>
}

export default Page;
