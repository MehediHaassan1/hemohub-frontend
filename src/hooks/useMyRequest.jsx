import { useQuery } from "@tanstack/react-query";
import useUserData from "./useUserData";
import Loading from "../components/Loading";
import usePrivetApi from "./usePrivetApi";

const useMyRequest = () => {
    const privetApi = usePrivetApi();
    const { userData } = useUserData();
    const {
        data: myDonationReq,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["donationReq", userData?.email],
        queryFn: async () => {
            const donationReqRes = await privetApi(
                `/api/v1/my-donation-request/${userData?.email}`
            );
            return donationReqRes.data;
        },
    });

    return { myDonationReq, refetch };
};

export default useMyRequest;
