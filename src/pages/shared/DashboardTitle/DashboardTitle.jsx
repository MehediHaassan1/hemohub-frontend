import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const DashboardTitle = ({ title, edit, setEdit }) => {
    const handleEditIcon = () => {
        setEdit(!edit);
    };
    return (
        <div className="mb-5 pb-5 border-b-2 border-dashed flex items-center justify-between">
            <h1 className="capitalize text-3xl">{title}</h1>
            <div onClick={handleEditIcon} className="cursor-pointer">
                {edit ? (
                    <RxCross2 className="w-6 h-6 text-accent"></RxCross2>
                ) : (
                    <FaEdit className="w-6 h-6 text-accent"></FaEdit>
                )}
            </div>
        </div>
    );
};

export default DashboardTitle;
