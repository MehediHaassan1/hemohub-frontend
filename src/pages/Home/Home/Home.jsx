import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";
import Data from "../Data/Data";
import Process from "../Process/Process";
import Volunteers from "../Volunteers/Volunteers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Data></Data>
            <Process></Process>
            <Campaigns></Campaigns>
            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;
