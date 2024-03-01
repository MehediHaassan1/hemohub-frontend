import Swal from "sweetalert2";
import Table from "../../../components/Table";
import useAllRequest from "../../../hooks/useAllRequest";
import usePrivetApi from "../../../hooks/usePrivetApi";
import { useState } from "react";

const AllRequests = () => {
    const [status, setStatus] = useState("default");

    const { allRequests, refetch } = useAllRequest(status);
    const privetApi = usePrivetApi();

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleUpdateStatus = (status, data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${status}!`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updatedStatusRes = await privetApi.patch(
                    `/api/v1/update-request-status/${data?._id}`,
                    { status: status }
                );
                if (updatedStatusRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${status}`,
                        text: `Donation has been ${status}.`,
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };

    return (
        <div>
            <div className="pb-5 mb-5 border-b border-dashed flex items-center justify-between">
                <h1 className="text-3xl text-center">All Donation Request</h1>
                <div>
                    <select
                        onChange={handleStatusChange}
                        className="select select-border border-primary focus:outline-none focus:border-primary bg-transparent"
                        defaultValue="default"
                    >
                        <option className="bg-slate-900" value="default">
                            Default
                        </option>
                        <option className="bg-slate-900" value="Pending">
                            Pending
                        </option>
                        <option className="bg-slate-900" value="Inprogress">
                            Inprogress
                        </option>
                        <option className="bg-slate-900" value="Done">
                            Done
                        </option>
                        <option className="bg-slate-900" value="Canceled">
                            Canceled
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <Table
                    donationRequests={allRequests}
                    handleUpdateStatus={handleUpdateStatus}
                ></Table>
            </div>
        </div>
    );
};

export default AllRequests;
