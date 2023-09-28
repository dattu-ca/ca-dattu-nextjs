import {getAuthSession} from '~/auth.services';
import clsx from "clsx";

const Page = async () => {
    const session = await getAuthSession()
    return <div>
        <h1>Dashboard Page</h1>
        <div className={clsx()}>
            <pre>{JSON.stringify({session}, null, 2)}</pre>
        </div>
    </div>
}
export default Page;