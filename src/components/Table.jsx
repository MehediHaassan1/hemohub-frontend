import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const Table = ({ myDonationReqs, handleUpdateStatus }) => {
    const handleDonorInfo = (data) => {
        Swal.fire({
            title: "Donor Info!",
            html: `<p>Name: ${data.requesterName}</p><p>Email: ${data.requesterEmail}</p>`,
            icon: "info",
        });
    };
    return (
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
                            <td>{data.subDistrict + ", " + data.district}</td>
                            <td>{data.donationDate}</td>
                            <td>{data.donationTime}</td>
                            {data.status === "inprogress" ? (
                                <td className="space-x-3">
                                    <button
                                        title="done"
                                        onClick={() =>
                                            handleUpdateStatus("done", data)
                                        }
                                    >
                                        <FaCheck className="w-4 h-4"></FaCheck>
                                    </button>
                                    <button
                                        title="cancel"
                                        onClick={() =>
                                            handleUpdateStatus("canceled", data)
                                        }
                                    >
                                        <RxCross2 className="w-4 h-4"></RxCross2>
                                    </button>
                                </td>
                            ) : (
                                <td>{data.status}</td>
                            )}

                            <td className="flex items-center justify-center">
                                <button onClick={() => handleDonorInfo(data)}>
                                    <FaCircleInfo className="w-4 h-4 text-accent" />
                                </button>
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
    );
};

export default Table;
