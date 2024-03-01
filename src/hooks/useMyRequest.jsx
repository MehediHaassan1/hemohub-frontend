import { useQuery } from "@tanstack/react-query";
import useUserData from "./useUserData";
import usePrivetApi from "./usePrivetApi";

const useMyRequest = (status) => {
    const privetApi = usePrivetApi();
    const { userData } = useUserData();
    const {
        data: myDonationReq,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["donationReq", userData?.email, status],
        queryFn: async () => {
            const donationReqRes = await privetApi(
                `/api/v1/my-donation-request/${userData?.email}?status=${status}`
            );
            return donationReqRes.data;
        },
    });

    return { myDonationReq, refetch };
};

export default useMyRequest;
