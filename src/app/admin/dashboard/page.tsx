import {getAuthSession} from '~/auth.services';

const Page = async () => {
    const session = await getAuthSession()
    return <div>
        <h1>Dashboard Page</h1>
        <div className='overflow-auto'>
            <pre>{JSON.stringify({session}, null, 2)}</pre>
        </div>
    </div>
}
export default Page;