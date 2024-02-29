import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import usePrivetApi from "./usePrivetApi";

const useAllRequest = () => {
    const privetApi = usePrivetApi();

    const { data: allRequests, refetch } = useQuery({
        queryKey: ["allRequests"],
        queryFn: async () => {
            const allReqRes = await privetApi.get("/api/v1/all-requests");
            return allReqRes.data;
        },
    });
    return { allRequests, refetch };
};

export default useAllRequest;
