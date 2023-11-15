import {homePageServices} from "~/services";
import {HomePageComponent} from "~/app.components/homePageComponent";

const Page = async () => {
    const data = await homePageServices.fetch();
    if (!data || !data.sysId) {
        return <p>NOT CREATED</p>
    }
    return <div>
        <HomePageComponent homePage={data}/>
    </div>
}

export default Page;
