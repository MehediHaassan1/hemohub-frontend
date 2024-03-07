import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePublicApi from "../../hooks/usePublicApi";
import Table from "../../components/Table";
import useUserData from "../../hooks/useUserData";

const DonationReqDetails = () => {
    const { id } = useParams();
    console.log(id);
    const publicApi = usePublicApi();
    const [requestsDetails, setRequestsDetails] = useState(null);

    const { userData } = useUserData();

    useEffect(() => {
        async function getData() {
            const requestedDetail = await publicApi.get(
                `/api/v1/all-public-requests/${id}`
            );
            setRequestsDetails(requestedDetail.data);
        }
        getData();
        ``;
    }, [id, publicApi]);

    console.log(requestsDetails);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-xl">
                    <span className="font-bold">Blood Group :</span>{" "}
                    {requestsDetails?.bloodGroup}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Recipient Name :</span>{" "}
                    {requestsDetails?.recipientName}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Location : </span>
                    {requestsDetails?.subdistrict +
                        ", " +
                        requestsDetails?.district}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Address :</span>{" "}
                    {requestsDetails?.address}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Hospital Name :</span>{" "}
                    {requestsDetails?.hospitalName}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Donation Data :</span>{" "}
                    {requestsDetails?.donationDate}
                </h1>
                <h1 className="text-xl">
                    <span className="font-bold">Donation Time :</span>{" "}
                    {requestsDetails?.donationTime}
                </h1>
                {userData && (
                    <button className="bg-secondary py-2 px-4 rounded cursor-pointer mt-4">
                        Donate
                    </button>
                )}
            </div>
        </div>
    );
};

export default DonationReqDetails;
