import {fetchAuthProfileIdFromProviderData} from "~/services.db/auth";

const Page = async () => {
    const authProfile = await fetchAuthProfileIdFromProviderData('google', '110936461031997432633')
    
    return <div>
        <pre>{JSON.stringify(authProfile, null, 2)}</pre>
    </div>
}

export default Page;
