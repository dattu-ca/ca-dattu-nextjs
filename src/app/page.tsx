import {ReactIcon} from "~/components/ReactIcon";
import {HomeComponent} from "~/components/HomeComponent";

const Page = async () => {

    return <div>
        <h1>HOME PAGE</h1>
        <ReactIcon icon='FaCentos' className={'w-[100px] h-[100px]'}/>
        <HomeComponent/>
    </div>
}

export default Page;
