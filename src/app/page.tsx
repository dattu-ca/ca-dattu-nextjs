
import {HomeComponent} from "~/components/HomeComponent";
import {FaCentos} from "react-icons/fa6";

const Page = async () => {

    return <div>
        <h1>HOME PAGE</h1>
        <FaCentos  className={'w-[100px] h-[100px]'}/>
        <HomeComponent/>
    </div>
}

export default Page;
