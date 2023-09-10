import {getAuthSession} from '~/services';

const Page = async () => {
    const session = await getAuthSession()
    return <div>
        <h1>Dashboard Page</h1>
        <pre>{JSON.stringify({session}, null, 2)}</pre>
    </div>
}
export default Page;