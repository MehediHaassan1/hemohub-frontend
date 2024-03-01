import { FaCheck } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const StatusButton = ({ role, status, handleUpdateStatus }) => {
    const statusIcons = {
        Pending: <FaCheck className="h-4 w-4" />,
        Done: <HiBadgeCheck title="Done" className="h-4 w-4" />,
        Canceled: <MdCancel title="Canceled" className="h-4 w-4" />,
        Inprogress: <IoMdDoneAll title="Inprogress" className="h-4 w-4" />,
    };

    const statusColor = {
        Pending: "",
        Done: "text-green-400",
        Canceled: "text-red-400",
        Inprogress: "text-yellow-400",
    };

    return (
        <td className={` ${statusColor[status]}`}>
            {role === "admin" && (
                <div className="flex items-center justify-center">
                    {status === "Pending" ? (
                        <button
                            className="bg-slate-800 rounded p-1"
                            title="Make Progress"
                            onClick={() => handleUpdateStatus("Inprogress")}
                        >
                            {statusIcons[status]}
                        </button>
                    ) : (
                        <button className="bg-slate-800 rounded p-1">
                            {statusIcons[status]}
                        </button>
                    )}
                </div>
            )}
            {role === "volunteer" && (
                <div className="flex items-center justify-center">
                    {status === "Pending" ? (
                        <button
                            className="bg-slate-800 rounded p-1"
                            title="Make Progress"
                            onClick={() => handleUpdateStatus("Inprogress")}
                        >
                            {statusIcons[status]}
                        </button>
                    ) : (
                        <button className="bg-slate-800 rounded p-1">
                            {statusIcons[status]}
                        </button>
                    )}
                </div>
            )}
        </td>
    );
};

export default StatusButton;
