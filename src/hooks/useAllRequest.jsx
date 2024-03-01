import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import usePrivetApi from "./usePrivetApi";

const useAllRequest = (status) => {
    const privetApi = usePrivetApi();

    const { data: allRequests, refetch } = useQuery({
        queryKey: ["allRequests", status],
        queryFn: async () => {
            const allReqRes = await privetApi.get(
                `/api/v1/all-requests?status=${status}`
            );
            return allReqRes.data;
        },
    });
    return { allRequests, refetch };
};

export default useAllRequest;
