import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useStateData = () => {
    const publicApi = usePublicApi();

    // division query
    const { data: stateData } = useQuery({
        queryKey: ["state-data"],
        queryFn: async () => {
            const stateRes = await publicApi.get("/api/v1/state-data");
            return stateRes.data;
        },
    });
    return { stateData };
};

export default useStateData;
