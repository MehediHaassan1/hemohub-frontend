import useMyRequest from "../hooks/useMyRequest";
import useUserData from "../hooks/useUserData";
import Table from "./Table";

const LatestReq = () => {
    const { userData } = useUserData();
    const { myDonationReq } = useMyRequest();
    const myDonationReqs = myDonationReq?.slice(0, 3);
    return (
        <div>
            {myDonationReqs?.length > 0 && userData?.role === "donor" && (
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

export default LatestReq;
