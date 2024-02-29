import useMyRequest from "../../../hooks/useMyRequest";
import useUserData from "../../../hooks/useUserData";
import Table from "../../../components/Table";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";

const MyDonation = () => {
    const { myDonationReq: myDonationReqs, refetch } = useMyRequest();
    const privetApi = usePrivetApi();

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

    const handleDeleteDonation = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const willDeleteRes = await privetApi.delete(
                    `/api/v1/delete-donation-request/${id}`
                );
                if (willDeleteRes.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };

    return (
        <div>
            <div className="pb-5 mb-5 border-b border-dashed">
                <h1 className="text-3xl text-center">My Donation Request</h1>
            </div>
            <div>
                <Table
                    donationRequests={myDonationReqs}
                    handleUpdateStatus={handleUpdateStatus}
                    handleDeleteDonation={handleDeleteDonation}
                ></Table>
            </div>
        </div>
    );
};

export default MyDonation;
