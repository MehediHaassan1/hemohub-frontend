import useMyRequest from "../../../hooks/useMyRequest";
import useUserData from "../../../hooks/useUserData";
import Table from "../../../components/Table";

const MyDonation = () => {
    const { userData } = useUserData();
    const { myDonationReq: myDonationReqs } = useMyRequest();

    return (
        <div>
            <div className="pb-5 mb-5 border-b border-dashed">
                <h1 className="text-3xl text-center">My Donation Request</h1>
            </div>
            <div>
                <Table myDonationReqs={myDonationReqs}></Table>
            </div>
        </div>
    );
};

export default MyDonation;
