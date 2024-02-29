import Table from "./Table";

const LatestReq = ({ myDonationReqs, handleUpdateStatus }) => {
    return (
        <div>
            <h1 className="capitalize text-3xl border-b border-dashed pb-2 mb-2 text-center">
                latest donation
            </h1>
            <Table
                donationRequests={myDonationReqs}
                handleUpdateStatus={handleUpdateStatus}
            ></Table>
        </div>
    );
};

export default LatestReq;
