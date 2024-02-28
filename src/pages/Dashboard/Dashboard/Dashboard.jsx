import lab from "../../../assets/lab.svg";
import useUserData from "../../../hooks/useUserData";
import Stats from "../../../components/Stats";
import LatestReq from "../../../components/LatestReq";
import useMyRequest from "../../../hooks/useMyRequest";

const Dashboard = () => {
    const { userData } = useUserData();
    const { myDonationReq } = useMyRequest();
    const myDonationReqs = myDonationReq?.slice(0, 3);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">
                Hi {userData.name.split(" ")[0]}, Welcome to HemoHub
            </h1>
            <img src={lab} alt="lab" className="md:w-4/6" />
            {myDonationReqs?.length > 0 && userData?.role === "donor" && (
                <LatestReq myDonationReqs={myDonationReqs}></LatestReq>
            )}
            {userData?.role === "admin" && <Stats></Stats>}
        </div>
    );
};

export default Dashboard;
