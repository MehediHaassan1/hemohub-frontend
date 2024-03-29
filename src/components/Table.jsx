import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { FaCircleInfo, FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import useUserData from "../hooks/useUserData";
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import StatusButton from "./StatusButton";
import ActionButtons from "./ActionButtons";

const Table = ({
    donationRequests,
    handleUpdateStatus,
    handleDeleteDonation,
}) => {
    const { userData } = useUserData();
    const { pathname } = useLocation();
    const handleDonorInfo = (data) => {
        Swal.fire({
            title: "Donor Info!",
            html: `${
                data.donorName && data.donorEmail
                    ? `<p>Name: ${data.donorName}</p><p>Email: ${data.donorEmail}</p>`
                    : `<p>Name: Not Found</p><p>Email: Not Found</p>`
            }`,
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
                        {pathname !== "/dashboard" &&
                            userData?.role === "admin" && <th>Action</th>}
                        {pathname !== "/dashboard" &&
                            userData?.role === "donor" && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {donationRequests?.map((data, index) => (
                        <tr key={data._id}>
                            <th>{index + 1}</th>
                            <td>{data.recipientName}</td>
                            <td>{data.subdistrict + ", " + data.district}</td>
                            <td>{data.donationDate}</td>
                            <td>{data.donationTime}</td>
                            {userData?.role === "admin" && (
                                <StatusButton
                                    role={userData?.role}
                                    status={data.status}
                                    handleUpdateStatus={() =>
                                        handleUpdateStatus("Inprogress", data)
                                    }
                                />
                            )}
                            {userData?.role === "volunteer" && (
                                <StatusButton
                                    role={userData?.role}
                                    status={data.status}
                                    handleUpdateStatus={() =>
                                        handleUpdateStatus("Inprogress", data)
                                    }
                                />
                            )}

                            {userData?.role === "donor" && (
                                <td className="">
                                    {data.status === "Inprogress" ? (
                                        <div className="space-x-2 flex items-center justify-center">
                                            <button
                                                title="Done"
                                                className="text-green-400 bg-slate-900 p-1 rounded"
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
                                                className="text-red-400 bg-slate-900 p-1 rounded"
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
                                        <div
                                            className={`${
                                                (data.status === "Canceled" &&
                                                    "text-red-400") ||
                                                (data.status === "Done" &&
                                                    "text-green-400")
                                            } flex items-center justify-center`}
                                        >
                                            <button className="bg-slate-900 rounded p-1">
                                                {(data.status === "Done" && (
                                                    <HiBadgeCheck
                                                        title="Done"
                                                        className="h-4 w-4"
                                                    />
                                                )) ||
                                                    (data.status ===
                                                        "Canceled" && (
                                                        <MdCancel
                                                            title="Canceled"
                                                            className="h-4 w-4 "
                                                        />
                                                    )) ||
                                                    (data.status ===
                                                        "Pending" && (
                                                        <FaCheck
                                                            title="Pending"
                                                            className="h-4 w-4"
                                                        ></FaCheck>
                                                    ))}
                                            </button>
                                        </div>
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
                            {pathname !== "/dashboard" && (
                                <ActionButtons
                                    role={userData?.role}
                                    status={data.status}
                                    handleDeleteDonation={handleDeleteDonation}
                                    dataId={data._id}
                                />
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
