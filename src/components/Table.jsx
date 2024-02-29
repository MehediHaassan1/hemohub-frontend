import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { FaCircleInfo, FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import useUserData from "../hooks/useUserData";
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";

const Table = ({ donationRequests, handleUpdateStatus }) => {
    const { userData } = useUserData();
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
                    {donationRequests?.map((data, index) => (
                        <tr key={data._id}>
                            <th>{index + 1}</th>
                            <td>{data.recipientName}</td>
                            <td>{data.subDistrict + ", " + data.district}</td>
                            <td>{data.donationDate}</td>
                            <td>{data.donationTime}</td>
                            {userData?.role === "admin" && (
                                <td
                                    className={`${
                                        (data.status === "Canceled" &&
                                            "text-red-400") ||
                                        (data.status === "Done" &&
                                            "text-green-400") ||
                                        (data.status === "Inprogress" &&
                                            "text-yellow-400")
                                    }`}
                                >
                                    {data.status === "Pending" ? (
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="bg-slate-800 p-1 rounded"
                                                title="Make Progress"
                                                onClick={() =>
                                                    handleUpdateStatus(
                                                        "Inprogress",
                                                        data
                                                    )
                                                }
                                            >
                                                <FaCheck className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        (data.status === "Done" && (
                                            <div className="flex items-center justify-center ">
                                                <button className="bg-slate-800 rounded p-1">
                                                    <HiBadgeCheck
                                                        title="Done"
                                                        className="h-4 w-4 "
                                                    />
                                                </button>
                                            </div>
                                        )) ||
                                        (data.status === "Canceled" && (
                                            <div className="flex items-center justify-center ">
                                                <button className="bg-slate-800 rounded p-1">
                                                    <MdCancel
                                                        title="Canceled"
                                                        className="h-4 w-4 "
                                                    />
                                                </button>
                                            </div>
                                        )) ||
                                        (data.status === "Inprogress" && (
                                            <div className="flex items-center justify-center ">
                                                <button className="bg-slate-800 rounded p-1">
                                                    <IoMdDoneAll
                                                        title="Inprogress"
                                                        className="h-4 w-4"
                                                    />
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </td>
                            )}
                            {userData?.role === "donor" && (
                                <td className="">
                                    {data.status === "Inprogress" ? (
                                        <div className="space-x-2 flex items-center justify-center">
                                            <button
                                                title="Done"
                                                className="text-green-400"
                                                onClick={() =>
                                                    handleUpdateStatus(
                                                        "Done",
                                                        data
                                                    )
                                                }
                                            >
                                                <FaCheck className="w-4 h-4"></FaCheck>
                                            </button>
                                            <button
                                                className="text-red-400"
                                                title="Cancel"
                                                onClick={() =>
                                                    handleUpdateStatus(
                                                        "Canceled",
                                                        data
                                                    )
                                                }
                                            >
                                                <FaXmark className="w-4 h-4"></FaXmark>
                                            </button>
                                        </div>
                                    ) : (
                                        <p
                                            className={`${
                                                (data.status === "Canceled" &&
                                                    "text-red-400") ||
                                                (data.status === "Done" &&
                                                    "text-green-400")
                                            } flex items-center justify-center bg-orange-500 p-2`}
                                        >
                                            {(data.status === "Done" && (
                                                <HiBadgeCheck
                                                    title="Done"
                                                    className="h-4 w-4"
                                                />
                                            )) ||
                                                (data.status === "Canceled" && (
                                                    <MdCancel
                                                        title="Canceled"
                                                        className="h-4 w-4 "
                                                    />
                                                ))}
                                        </p>
                                    )}
                                </td>
                            )}
                            <td>
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => handleDonorInfo(data)}
                                    >
                                        <FaCircleInfo className="w-4 h-4 text-accent" />
                                    </button>
                                </div>
                            </td>
                            <td className="space-x-2">
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
