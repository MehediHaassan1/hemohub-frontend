import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";
import useUserData from "./useUserData";
import Loading from "../components/Loading";

const useMyRequest = () => {
    const publicApi = usePublicApi();
    const { userData } = useUserData();
    const {
        data: myDonationReq,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["donationReq", userData?.email],
        queryFn: async () => {
            const donationReqRes = await publicApi(
                `/api/v1/my-donation-request/${userData?.email}`
            );
            return donationReqRes.data;
        },
    });
    if (isLoading) return <Loading></Loading>;

    return { myDonationReq, refetch };
};

export default useMyRequest;
