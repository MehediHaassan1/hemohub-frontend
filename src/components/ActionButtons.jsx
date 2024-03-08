import { FaTrash, FaEdit } from "react-icons/fa";

const ActionButtons = ({ role, status, handleDeleteDonation, dataId }) => {
    const handleDelete = () => {
        handleDeleteDonation(dataId);
    };

    const canEditOrDelete = status === "Pending" || status === "Inprogress";

    return (
        <>
            {role !== "volunteer" && (
                <td className="space-x-2">
                    {canEditOrDelete && (
                        <div className="flex gap-2 items-center justify-center">
                            <button onClick={handleDelete}>
                                <FaTrash className="w-4 h-4 text-red-400"></FaTrash>
                            </button>
                        </div>
                    )}
                    {!canEditOrDelete && (
                        <div className="flex items-center justify-center">
                            <button onClick={handleDelete}>
                                <FaTrash className="w-4 h-4 text-red-400"></FaTrash>
                            </button>
                        </div>
                    )}
                </td>
            )}
        </>
    );
};

export default ActionButtons;
