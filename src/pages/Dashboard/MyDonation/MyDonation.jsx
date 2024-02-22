import useMyRequest from "../../../hooks/useMyRequest";
import useUserData from "../../../hooks/useUserData";
import { FaCircleInfo, FaTrash, FaCheck } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const MyDonation = () => {
    const { userData } = useUserData();
    const { myDonationReq: myDonationReqs } = useMyRequest();

    return (
        <div>
            <div className="pb-5 mb-5 border-b border-dashed">
                <h1 className="text-3xl text-center">My Donation Request</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        <thead>
                            <tr className="text-txt text-sm">
                                <th></th>
                                <th>Recipient</th>
                                <th>Recipient Location</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Donar Info</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myDonationReqs?.map((data, index) => (
                                <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data.recipientName}</td>
                                    <td>
                                        {data.subDistrict +
                                            ", " +
                                            data.district}
                                    </td>
                                    <td>{data.donationDate}</td>
                                    <td>{data.donationTime}</td>
                                    {data.status === "inprogress" ? (
                                        <td className="space-x-3">
                                            <button title="done">
                                                <FaCheck className="w-4 h-4"></FaCheck>
                                            </button>
                                            <button title="cancel">
                                                <RxCross2 className="w-4 h-4"></RxCross2>
                                            </button>
                                        </td>
                                    ) : (
                                        <td>{data.status}</td>
                                    )}

                                    <td className="flex items-center justify-center">
                                        <FaCircleInfo className="w-4 h-4" />
                                    </td>
                                    <td className="space-x-3">
                                        <button>
                                            <FaEdit className="w-4 h-4"></FaEdit>
                                        </button>
                                        <button>
                                            <FaTrash className="w-4 h-4"></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyDonation;
