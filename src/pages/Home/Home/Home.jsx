import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";
import Data from "../Data/Data";
import Process from "../Process/Process";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Data></Data>
            <Process></Process>
            <Campaigns></Campaigns>
        </div>
    );
};

export default Home;
