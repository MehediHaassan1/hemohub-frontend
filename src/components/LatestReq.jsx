import Table from "./Table";

const LatestReq = ({ myDonationReqs }) => {
    return (
        <div>
            <h1 className="capitalize text-3xl border-b border-dashed pb-2 mb-2 text-center">
                latest donation
            </h1>
            <Table myDonationReqs={myDonationReqs}></Table>
        </div>
    );
};

export default LatestReq;
