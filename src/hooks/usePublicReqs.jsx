import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const usePublicReqs = () => {
    const publicApi = usePublicApi();
    const { data: allPublicReqs } = useQuery({
        queryKey: ["allPublicReqs"],
        queryFn: async () => {
            const allPublicReqsRes = await publicApi.get(
                "/api/v1/all-public-requests?status=Pending"
            );
            return allPublicReqsRes.data;
        },
    });
    return { allPublicReqs };
};

export default usePublicReqs;
