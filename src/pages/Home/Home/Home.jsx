import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";
import Data from "../Data/Data";
import Gallery from "../Gallery/Gallery";
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
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
