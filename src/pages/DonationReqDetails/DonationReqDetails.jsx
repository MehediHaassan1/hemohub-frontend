import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePublicApi from "../../hooks/usePublicApi";
import Table from "../../components/Table";
import useUserData from "../../hooks/useUserData";
import usePrivetApi from "../../hooks/usePrivetApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const DonationReqDetails = () => {
    const { id } = useParams();
    console.log(id);
    const publicApi = usePublicApi();
    const privetApi = usePrivetApi();
    const [requestsDetails, setRequestsDetails] = useState(null);
    const navigate = useNavigate();

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

    const handleDonate = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const donorName = e.target.userName.value;
        const donorEmail = e.target.userEmail.value;
        console.log(donorName, donorEmail);
        const updatedInfo = {
            status: "Inprogress",
            donorName: donorName,
            donorEmail: donorEmail,
        };
        const donateRes = await privetApi.patch(
            `/api/v1/update-request-status/${requestsDetails?._id}`,
            updatedInfo
        );
        if (donateRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Donation in progress",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/donation-request");
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Details  | HemoHub</title>
            </Helmet>
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
                {userData ? (
                    <>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("my_modal_5")
                                    .showModal()
                            }
                            className="bg-secondary py-2 px-4 rounded cursor-pointer mt-4"
                        >
                            Donate
                        </button>
                        <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box bg-bkg">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <form onSubmit={handleDonate}>
                                    <div>
                                        <label htmlFor="userName">
                                            Donor Name
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="userName"
                                            id="userName"
                                            className="input w-full max-w-sm bg-slate-800 mb-2"
                                            defaultValue={userData?.name}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="userEmail">
                                            Donor Email
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="userEmail"
                                            id="userEmail"
                                            className="input w-full max-w-sm bg-slate-800 mb-4"
                                            defaultValue={userData?.email}
                                            readOnly
                                        />
                                    </div>
                                    <button type="submit" className="btn">
                                        Donate
                                    </button>
                                </form>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <div role="alert" className="alert md:w-1/2 mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>Please login to donate blood.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DonationReqDetails;
