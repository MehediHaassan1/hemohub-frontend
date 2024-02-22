import lab from "../../../assets/lab.svg";
import Table from "../../../components/Table";
import useMyRequest from "../../../hooks/useMyRequest";
import useUserData from "../../../hooks/useUserData";

const Dashboard = () => {
    const { userData } = useUserData();
    const { myDonationReq } = useMyRequest();
    const myDonationReqs = myDonationReq?.slice(0, 3);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">
                Hi {userData.name.split(" ")[0]}, Welcome to HemoHub
            </h1>
            <img src={lab} alt="lab" className=" w-4/6" />
            {myDonationReqs?.length > 0 && (
                <div>
                    <h1 className="capitalize text-3xl border-b border-dashed pb-2 mb-2 text-center">
                        latest donation
                    </h1>
                    <Table myDonationReqs={myDonationReqs}></Table>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
