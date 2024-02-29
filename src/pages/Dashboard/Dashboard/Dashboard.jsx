import lab from "../../../assets/lab.svg";
import useUserData from "../../../hooks/useUserData";
import Stats from "../../../components/Stats";
import LatestReq from "../../../components/LatestReq";
import useMyRequest from "../../../hooks/useMyRequest";
import useAdmin from "../../../hooks/useAdmin";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";

const Dashboard = () => {
    const { userData } = useUserData();
    const { isAdmin } = useAdmin();
    const { myDonationReq, refetch } = useMyRequest();
    const myDonationReqs = myDonationReq?.slice(0, 3);
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
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">
                Hi {userData.name.split(" ")[0]}, Welcome to HemoHub
            </h1>
            <img src={lab} alt="lab" className="md:w-4/6" />
            {myDonationReqs?.length > 0 && userData?.role === "donor" && (
                <LatestReq
                    myDonationReqs={myDonationReqs}
                    handleUpdateStatus={handleUpdateStatus}
                ></LatestReq>
            )}
            {isAdmin && <Stats></Stats>}
        </div>
    );
};

export default Dashboard;
